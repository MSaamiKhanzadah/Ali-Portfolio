'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

type RobotSceneProps = { className?: string }

/** A small, scroll-directed studio portrait. All of the artwork is procedural. */
export default function RobotScene({ className = '' }: RobotSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' })
    } catch {
      host.dataset.sceneReady = 'false'
      return
    }

    host.dataset.sceneReady = 'true'
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7))
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.domElement.setAttribute('aria-hidden', 'true')
    renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;pointer-events:none;'
    host.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 70)
    const pmrem = new THREE.PMREMGenerator(renderer)
    const room = new RoomEnvironment()
    const environment = pmrem.fromScene(room, 0.04)
    scene.environment = environment.texture
    room.dispose()
    pmrem.dispose()

    scene.add(new THREE.HemisphereLight('#fffbf2', '#b2b4af', 2.1))
    const key = new THREE.DirectionalLight('#fff6e9', 4.5)
    key.position.set(-3.8, 6, 6)
    key.castShadow = true
    key.shadow.mapSize.set(1024, 1024)
    key.shadow.camera.left = -4
    key.shadow.camera.right = 4
    key.shadow.camera.top = 5
    key.shadow.camera.bottom = -4
    key.shadow.normalBias = 0.025
    key.shadow.bias = -0.0001
    key.shadow.radius = 4
    scene.add(key)
    const rim = new THREE.DirectionalLight('#ffffff', 2.7)
    rim.position.set(3, 4, -4)
    scene.add(rim)
    const warm = new THREE.PointLight('#d4ba79', 2, 7)
    warm.position.set(-3, 1, 1.5)
    scene.add(warm)

    const shell = new THREE.MeshPhysicalMaterial({
      color: '#e8e6df', roughness: 0.28, metalness: 0.02, clearcoat: 0.7, clearcoatRoughness: 0.27,
    })
    const porcelain = new THREE.MeshPhysicalMaterial({
      color: '#faf9f3', roughness: 0.23, metalness: 0.02, clearcoat: 0.8, clearcoatRoughness: 0.22,
    })
    const seam = new THREE.MeshStandardMaterial({ color: '#323631', roughness: 0.5, metalness: 0.45 })
    const charcoal = new THREE.MeshStandardMaterial({ color: '#252a27', roughness: 0.85, metalness: 0.04 })
    const gold = new THREE.MeshPhysicalMaterial({ color: '#b88a3b', roughness: 0.31, clearcoat: 0.8, metalness: 0.35 })
    const cobalt = new THREE.MeshPhysicalMaterial({ color: '#2447a8', roughness: 0.35, clearcoat: 0.6 })
    const metal = new THREE.MeshStandardMaterial({ color: '#a6a9a0', roughness: 0.34, metalness: 0.8 })
    const led = new THREE.MeshStandardMaterial({ color: '#e3c16c', emissive: '#b58a30', emissiveIntensity: 1.8 })

    const portrait = new THREE.Group()
    scene.add(portrait)
    const robot = new THREE.Group()
    portrait.add(robot)

    const box = (
      parent: THREE.Object3D,
      size: [number, number, number],
      position: [number, number, number],
      material: THREE.Material,
      radius = 0.1,
    ) => {
      const mesh = new THREE.Mesh(new RoundedBoxGeometry(...size, 4, radius), material)
      mesh.position.set(...position)
      mesh.castShadow = true
      mesh.receiveShadow = true
      parent.add(mesh)
      return mesh
    }
    const sphere = (parent: THREE.Object3D, radius: number, position: [number, number, number], material: THREE.Material) => {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 24, 18), material)
      mesh.position.set(...position)
      mesh.castShadow = true
      parent.add(mesh)
      return mesh
    }
    const cylinder = (
      parent: THREE.Object3D, radius: number, height: number,
      position: [number, number, number], material: THREE.Material,
    ) => {
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, 32), material)
      mesh.position.set(...position)
      mesh.castShadow = true
      mesh.receiveShadow = true
      parent.add(mesh)
      return mesh
    }

    // A low machined pedestal grounds the little character without stealing the scene.
    box(portrait, [3.5, 0.38, 2.7], [0, -1.65, 0], charcoal, 0.06)
    box(portrait, [3.39, 0.025, 2.59], [0, -1.445, 0], seam, 0.015)
    box(portrait, [0.24, 0.035, 0.012], [-1.25, -1.63, 1.355], gold, 0.005)
    box(portrait, [0.07, 0.035, 0.012], [-1.04, -1.63, 1.355], metal, 0.005)

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShadowMaterial({ opacity: 0.13 }))
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -1.86
    floor.receiveShadow = true
    scene.add(floor)

    // Feet, limbs, and torso use separate shells so the construction reads at every angle.
    for (const side of [-1, 1]) {
      box(robot, [0.49, 0.25, 0.77], [side * 0.36, -1.29, 0.13], porcelain, 0.11)
      box(robot, [0.43, 0.055, 0.69], [side * 0.36, -1.42, 0.13], seam, 0.025)
      cylinder(robot, 0.155, 0.18, [side * 0.36, -1.1, 0.01], metal)
      box(robot, [0.39, 0.54, 0.43], [side * 0.36, -0.83, 0], shell, 0.1)
      sphere(robot, 0.18, [side * 0.36, -0.55, 0], seam)
    }
    box(robot, [0.79, 0.25, 0.61], [0, -0.46, 0], seam, 0.1)
    box(robot, [1.12, 1.0, 0.88], [0, 0.08, 0], shell, 0.23)
    box(robot, [0.9, 0.56, 0.055], [0, 0.11, 0.443], porcelain, 0.13)
    box(robot, [0.42, 0.045, 0.025], [-0.08, 0.24, 0.477], seam, 0.018)
    box(robot, [0.15, 0.045, 0.026], [0.25, 0.24, 0.477], cobalt, 0.018)
    for (let i = 0; i < 3; i++) box(robot, [0.045, 0.065, 0.025], [-0.065 + i * 0.065, -0.035, 0.48], i === 0 ? led : metal, 0.018)
    for (const side of [-1, 1]) {
      for (let i = 0; i < 3; i++) box(robot, [0.028, 0.17, 0.025], [side * (0.31 + i * 0.045), -0.08, 0.47], seam, 0.01)
    }
    const arms: THREE.Group[] = []
    for (const side of [-1, 1]) {
      const arm = new THREE.Group()
      arm.position.set(side * 0.67, 0.34, 0)
      arm.rotation.z = side * 0.09
      robot.add(arm)
      arms.push(arm)
      sphere(arm, 0.23, [0, 0, 0], seam)
      const shoulderCap = cylinder(arm, 0.22, 0.16, [side * 0.11, 0, 0], porcelain)
      shoulderCap.rotation.z = Math.PI / 2
      box(arm, [0.34, 0.56, 0.4], [side * 0.06, -0.32, 0], shell, 0.12)
      sphere(arm, 0.16, [side * 0.075, -0.61, 0.015], seam)
      box(arm, [0.35, 0.42, 0.42], [side * 0.08, -0.83, 0.07], porcelain, 0.13)
      box(arm, [0.035, 0.18, 0.028], [side * 0.065, -0.89, 0.283], seam, 0.014)
    }
    cylinder(robot, 0.23, 0.28, [0, 0.68, 0], seam)
    cylinder(robot, 0.29, 0.08, [0, 0.81, 0], metal)

    const head = new THREE.Group()
    head.position.set(0, 0.83, 0)
    head.rotation.z = -0.055
    robot.add(head)
    box(head, [1.57, 1.31, 1.25], [0, 0.66, -0.03], shell, 0.25)
    box(head, [1.43, 1.17, 0.21], [0, 0.67, 0.58], gold, 0.21)
    box(head, [1.34, 1.09, 0.18], [0, 0.67, 0.67], porcelain, 0.2)
    const faceCanvas = document.createElement('canvas')
    faceCanvas.width = 512
    faceCanvas.height = 512
    const faceContext = faceCanvas.getContext('2d')
    const faceTexture = new THREE.CanvasTexture(faceCanvas)
    faceTexture.colorSpace = THREE.SRGBColorSpace
    const glass = new THREE.MeshPhysicalMaterial({
      color: '#d5d9d0', map: faceTexture, emissive: '#ffffff', emissiveMap: faceTexture,
      emissiveIntensity: 0.62, roughness: 0.16, clearcoat: 1, clearcoatRoughness: 0.1, metalness: 0.08,
    })
    box(head, [1.16, 0.92, 0.1], [0, 0.68, 0.785], glass, 0.16)
    // Small printed accents and hardware make the ceramic surfaces feel manufactured.
    box(head, [0.21, 0.023, 0.015], [-0.39, 0.075, 0.578], seam, 0.005)
    sphere(head, 0.022, [0.45, 0.08, 0.582], led)
    for (const side of [-1, 1]) {
      const ear = cylinder(head, 0.235, 0.15, [side * 0.84, 0.66, -0.035], porcelain)
      ear.rotation.z = Math.PI / 2
      const cap = cylinder(head, 0.145, 0.02, [side * 0.927, 0.66, -0.035], metal)
      cap.rotation.z = Math.PI / 2
    }
    cylinder(head, 0.036, 0.24, [0.45, 1.42, -0.18], seam)
    sphere(head, 0.085, [0.45, 1.55, -0.18], gold)
    for (let i = 0; i < 5; i++) box(head, [0.022, 0.016, 0.21], [-0.13 + i * 0.065, 1.318, -0.2], seam, 0.005)

    let faceBlink = false
    const drawFace = (blink: boolean) => {
      if (!faceContext) return
      faceContext.clearRect(0, 0, 512, 512)
      faceContext.fillStyle = '#090f11'
      faceContext.fillRect(0, 0, 512, 512)
      for (const x of [174, 338]) {
        faceContext.shadowBlur = 26
        faceContext.shadowColor = '#bd974a'
        faceContext.fillStyle = '#f2cf83'
        faceContext.beginPath()
        faceContext.roundRect(x - 20, blink ? 239 : 192, 40, blink ? 9 : 98, 19)
        faceContext.fill()
      }
      faceContext.shadowBlur = 0
      faceTexture.needsUpdate = true
    }
    drawFace(false)

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reducedMotion = motionQuery.matches
    let targetProgress = 0
    let currentProgress = 0
    let pointerX = 0
    let pointerY = 0
    let lookX = 0
    let lookY = 0
    let visible = true
    let raf = 0
    let lastTime = performance.now()
    let elapsed = 0
    const cameraTarget = new THREE.Vector3()
    const lookTarget = new THREE.Vector3()
    const render = (now: number) => {
      raf = 0
      if (!visible || document.hidden) return
      const dt = Math.min((now - lastTime) / 1000, 0.05)
      lastTime = now
      elapsed += dt
      const damping = 1 - Math.exp(-dt * 7)
      currentProgress = reducedMotion ? 0 : THREE.MathUtils.lerp(currentProgress, targetProgress, damping)
      lookX = THREE.MathUtils.lerp(lookX, reducedMotion ? 0 : pointerX, damping)
      lookY = THREE.MathUtils.lerp(lookY, reducedMotion ? 0 : pointerY, damping)
      const p = THREE.MathUtils.smoothstep(currentProgress, 0, 1)
      // The camera climbs along the portrait as the surrounding story scrolls past.
      cameraTarget.set(4.7 - p * 0.9, 2.65 + p * 0.7, 8.1 - p * 0.7)
      const narrow = host.clientWidth / Math.max(host.clientHeight, 1) < 0.72
      if (narrow) cameraTarget.multiplyScalar(1.19)
      camera.position.copy(cameraTarget)
      lookTarget.set(0, 0.1 + p * 0.25, 0)
      camera.lookAt(lookTarget)
      portrait.rotation.y = -0.14 + p * 0.13
      head.rotation.y = lookX * 0.10 + (reducedMotion ? 0 : Math.sin(elapsed * 0.6) * 0.025)
      head.rotation.x = lookY * 0.055
      head.rotation.z = -0.055 + (reducedMotion ? 0 : Math.sin(elapsed * 0.75) * 0.015)
      robot.position.y = reducedMotion ? 0 : Math.sin(elapsed * 1.1) * 0.012
      arms[0].rotation.z = -0.09 + (reducedMotion ? 0 : Math.sin(elapsed * 0.85) * 0.018)
      arms[1].rotation.z = 0.09 - (reducedMotion ? 0 : Math.sin(elapsed * 0.85) * 0.018)
      const blink = !reducedMotion && elapsed % 5.3 > 5.12
      if (blink !== faceBlink) {
        faceBlink = blink
        drawFace(blink)
      }
      renderer.render(scene, camera)
      if (!reducedMotion) raf = requestAnimationFrame(render)
    }
    const requestRender = () => {
      if (!raf && visible && !document.hidden) {
        lastTime = performance.now()
        raf = requestAnimationFrame(render)
      }
    }
    const resize = () => {
      const width = host.clientWidth
      const height = host.clientHeight
      if (width < 1 || height < 1) return
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      requestRender()
    }
    const scroll = () => {
      const track = document.getElementById('intro-track')
      if (track) {
        const rect = track.getBoundingClientRect()
        targetProgress = THREE.MathUtils.clamp(-rect.top / Math.max(1, rect.height - window.innerHeight), 0, 1)
      }
      requestRender()
    }
    const pointer = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect()
      pointerX = THREE.MathUtils.clamp((event.clientX - rect.left) / Math.max(1, rect.width) * 2 - 1, -1, 1)
      pointerY = THREE.MathUtils.clamp((event.clientY - rect.top) / Math.max(1, rect.height) * 2 - 1, -1, 1)
      requestRender()
    }
    const changeMotion = () => {
      reducedMotion = motionQuery.matches
      requestRender()
    }
    const visibilityChange = () => requestRender()
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (!visible && raf) { cancelAnimationFrame(raf); raf = 0 }
      requestRender()
    }, { rootMargin: '100px' })
    observer.observe(host)
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host)
    window.addEventListener('scroll', scroll, { passive: true })
    window.addEventListener('pointermove', pointer, { passive: true })
    document.addEventListener('visibilitychange', visibilityChange)
    motionQuery.addEventListener('change', changeMotion)
    scroll()
    resize()

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      resizeObserver.disconnect()
      window.removeEventListener('scroll', scroll)
      window.removeEventListener('pointermove', pointer)
      document.removeEventListener('visibilitychange', visibilityChange)
      motionQuery.removeEventListener('change', changeMotion)
      const materials = new Set<THREE.Material>()
      const geometries = new Set<THREE.BufferGeometry>()
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          geometries.add(object.geometry)
          for (const material of Array.isArray(object.material) ? object.material : [object.material]) materials.add(material)
        }
      })
      for (const geometry of geometries) geometry.dispose()
      for (const material of materials) material.dispose()
      faceTexture.dispose()
      environment.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div ref={hostRef} className={className} aria-hidden="true" style={{ width: '100%', height: '100%' }} />
}
