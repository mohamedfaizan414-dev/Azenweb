import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

    // 2. Renderer with pure black background
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. Monochromatic Silk 3D Ribbon / Wave (Matching Brand Guidelines Gradient Style)
    // Create multiple overlapping ribbon layers to recreate the exact wave in Image 1 & 3
    const ribbonGroup = new THREE.Group();

    // Custom Shader Material for the signature silver-smoke liquid wave
    const waveShaderMaterial = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.NormalBlending,
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color(0xffffff) }, // Crisp silver-white highlight
        uColor2: { value: new THREE.Color(0x333338) }, // Mid slate
        uColor3: { value: new THREE.Color(0x050508) }, // Deep shadow
        uOpacity: { value: 0.85 },
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying float vElevation;

        void main() {
          vUv = uv;
          vec3 pos = position;

          // Gentle undulating silk wave motion
          float wave1 = sin(pos.x * 0.45 + uTime * 0.4) * 0.6;
          float wave2 = cos(pos.y * 0.6 + uTime * 0.3) * 0.4;
          float wave3 = sin((pos.x + pos.y) * 0.3 + uTime * 0.25) * 0.35;
          pos.z += wave1 + wave2 + wave3;

          vElevation = pos.z;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform float uOpacity;
        varying vec2 vUv;
        varying float vElevation;

        void main() {
          // Smooth gradient resembling the silver light ribbon
          float t = smoothstep(-0.8, 1.2, vElevation);
          vec3 col = mix(uColor3, uColor2, t * 0.8);
          col = mix(col, uColor1, pow(t, 2.5) * 0.75);

          // Edge falloff for seamless blending into pure pitch black
          float edgeAlpha = smoothstep(0.0, 0.25, vUv.x) * smoothstep(1.0, 0.75, vUv.x);
          float yAlpha = smoothstep(0.0, 0.2, vUv.y) * smoothstep(1.0, 0.75, vUv.y);
          float alpha = edgeAlpha * yAlpha * uOpacity * (0.35 + 0.65 * t);

          gl_FragColor = vec4(col, alpha);
        }
      `,
    });

    // Primary Wave Geometry (Sweeping across the right side like in images 1 & 3)
    const ribbonGeo = new THREE.PlaneGeometry(16, 9, 80, 50);
    const mainWave = new THREE.Mesh(ribbonGeo, waveShaderMaterial);
    mainWave.rotation.x = -0.55;
    mainWave.rotation.y = 0.45;
    mainWave.rotation.z = -0.25;
    mainWave.position.set(2.8, -0.6, 0);
    ribbonGroup.add(mainWave);

    // Secondary subtle accent wave for depth
    const waveShaderMaterial2 = waveShaderMaterial.clone();
    waveShaderMaterial2.uniforms.uOpacity.value = 0.45;
    const ribbonGeo2 = new THREE.PlaneGeometry(14, 7, 60, 40);
    const secondWave = new THREE.Mesh(ribbonGeo2, waveShaderMaterial2);
    secondWave.rotation.x = -0.65;
    secondWave.rotation.y = 0.35;
    secondWave.rotation.z = -0.15;
    secondWave.position.set(3.2, -1.2, -1.2);
    ribbonGroup.add(secondWave);

    scene.add(ribbonGroup);

    // 4. Subtle, delicate silver star/dust particles in deep space
    const particleCount = window.innerWidth < 768 ? 80 : 160;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 20;
      particlePos[i + 1] = (Math.random() - 0.5) * 14;
      particlePos[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.035,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Mouse parallax interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Handle Resize
    const onResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Adjust wave position for mobile vs desktop
      if (window.innerWidth < 768) {
        mainWave.position.set(0.5, -1.5, -1);
        mainWave.scale.set(0.7, 0.7, 0.7);
      } else {
        mainWave.position.set(2.8, -0.6, 0);
        mainWave.scale.set(1, 1, 1);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);

    // Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        waveShaderMaterial.uniforms.uTime.value = elapsed;
        waveShaderMaterial2.uniforms.uTime.value = elapsed + 2.0;

        // Smooth parallax
        targetX += (mouseX - targetX) * 0.04;
        targetY += (mouseY - targetY) * 0.04;

        ribbonGroup.position.x = targetX * 0.8;
        ribbonGroup.position.y = -targetY * 0.8;
        ribbonGroup.rotation.y = 0.45 + targetX * 0.1;

        // Particles gentle drift
        particles.rotation.y = elapsed * 0.015;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      ribbonGeo.dispose();
      ribbonGeo2.dispose();
      waveShaderMaterial.dispose();
      waveShaderMaterial2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    />
  );
}
