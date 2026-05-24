import './style.css'
import * as THREE from 'three'

type Pill = {
  label: string
  tone: 'cool' | 'neutral' | 'accent'
}

type Skill = {
  name: string
  level: string
  description: string
  value: number
}

type Interest = {
  title: string
  description: string
}

type ReflectionItem = {
  title: string
  text: string
}

type ExperienceItem = {
  title: string
  text: string
}

type ContactItem = {
  label: string
  value: string
  href?: string
}

const profilePills: Pill[] = [
  { label: 'Bachelor EPITECH', tone: 'accent' },
  { label: 'Cybersécurité', tone: 'cool' },
  { label: 'Développement', tone: 'neutral' },
]

const contactItems: ContactItem[] = [
  { label: 'Email', value: 'contact@diegomacia.dev', href: 'mailto:contact@diegomacia.dev' },
  { label: 'GitHub', value: 'github.com/diego-macia', href: 'https://github.com/' },
  { label: 'LinkedIn', value: 'linkedin.com/in/diego-macia', href: 'https://www.linkedin.com/' },
  { label: 'Localisation', value: 'EPITECH, France' },
]

const stats = [
  {
    label: 'Orientation',
    value: 'Cyber',
    detail: 'Construire une expertise technique solide en sécurité informatique.',
  },
  {
    label: 'Base actuelle',
    value: 'Programmation',
    detail: 'Python, C, C++ et C# pour apprendre les fondamentaux et progresser.',
  },
  {
    label: 'Expérience clé',
    value: 'Robotique',
    detail: 'Projet collaboratif avec firmware et logique de contrôle embarquée.',
  },
]

const skills: Skill[] = [
  {
    name: 'Python',
    level: 'Débutant / intermédiaire',
    description: 'Scripts, automatisation, logique de programmation et bases de sécurité.',
    value: 68,
  },
  {
    name: 'C',
    level: 'Connaissances de base',
    description: 'Compréhension des pointeurs, de la mémoire et de la logique bas niveau.',
    value: 42,
  },
  {
    name: 'C++',
    level: 'Connaissances de base',
    description: 'Programmation orientée objet et structuration de code plus avancée.',
    value: 40,
  },
  {
    name: 'C#',
    level: 'Connaissances de base',
    description: 'Approche orientée objet et découverte d’un écosystème applicatif riche.',
    value: 38,
  },
]

const interests: Interest[] = [
  {
    title: 'Cybersécurité',
    description: 'Comprendre les systèmes, anticiper les vulnérabilités et renforcer la défense.',
  },
  {
    title: 'Programmation',
    description: 'Résoudre des problèmes concrets avec du code clair et des fondations propres.',
  },
  {
    title: 'Technologies',
    description: 'Explorer les outils, les systèmes et les approches qui font avancer un projet.',
  },
]

const reflections: ReflectionItem[] = [
  {
    title: 'Ce que j’ai renforcé cette année',
    text: 'J’ai progressé sur la logique de programmation, la compréhension système et le travail en équipe sur un projet embarqué.',
  },
  {
    title: 'Ce que j’ai appris de mes projets',
    text: 'Le projet du robot distributeur de pilules m’a appris à structurer un firmware, à penser contrôle et à livrer quelque chose de fiable.',
  },
  {
    title: 'Ma méthode de progression',
    text: 'Je pars du concret, j’analyse les erreurs, puis je consolide les bases pour monter en niveau de manière régulière.',
  },
]

const experienceOutsideSchool: ExperienceItem[] = [
  {
    title: 'Veille technique',
    text: 'Lecture, exploration des technologies et suivi des sujets cybersécurité pour rester au contact des pratiques actuelles.',
  },
  {
    title: 'Projets personnels',
    text: 'Scripts, essais et expérimentations pour renforcer l’autonomie et tester de nouvelles approches techniques.',
  },
  {
    title: 'Communautés et événements',
    text: 'Espace prévu pour tes associations, ateliers, conférences ou activités hors école à intégrer au fur et à mesure.',
  },
]

const learningSteps = [
  'Comprendre plus en profondeur les systèmes et la sécurité.',
  'Renforcer Python pour l’automatisation et les outils utiles en cyber.',
  'Monter en maîtrise sur C, C++ et C# avec davantage de pratique.',
  'Capitaliser sur les projets pour montrer des preuves de progression.',
]

const projectMilestones = [
  'Participation au développement du firmware du robot distributeur de pilules.',
  'Mise en place de la logique de contrôle et des comportements principaux du robot.',
  'Travail en équipe sur un projet technique avec coordination et répartition des tâches.',
]

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found')
}

const renderPills = profilePills
  .map(
    (pill) => `
      <span class="pill pill-${pill.tone}">${pill.label}</span>
    `,
  )
  .join('')

const renderStats = stats
  .map(
    (stat) => `
      <article class="metric-card reveal">
        <p class="metric-label">${stat.label}</p>
        <p class="metric-value">${stat.value}</p>
        <p class="metric-detail">${stat.detail}</p>
      </article>
    `,
  )
  .join('')

const renderSkills = skills
  .map(
    (skill) => `
      <article class="skill-card reveal">
        <div class="skill-header">
          <div>
            <p class="skill-name">${skill.name}</p>
            <p class="skill-level">${skill.level}</p>
          </div>
          <span class="skill-tag">${skill.value}%</span>
        </div>
        <div class="skill-bar" aria-hidden="true">
          <span style="width:${skill.value}%"></span>
        </div>
        <p class="skill-description">${skill.description}</p>
      </article>
    `,
  )
  .join('')

const renderInterests = interests
  .map(
    (interest) => `
      <article class="interest-card reveal">
        <p class="interest-title">${interest.title}</p>
        <p class="interest-description">${interest.description}</p>
      </article>
    `,
  )
  .join('')

const renderProjectMilestones = projectMilestones
  .map(
    (milestone) => `
      <li>${milestone}</li>
    `,
  )
  .join('')

const renderContacts = contactItems
  .map(
    (contact) => `
      <li class="contact-item">
        <span class="contact-label">${contact.label}</span>
        ${contact.href ? `<a href="${contact.href}" target="_blank" rel="noreferrer">${contact.value}</a>` : `<span>${contact.value}</span>`}
      </li>
    `,
  )
  .join('')

const renderReflections = reflections
  .map(
    (item) => `
      <article class="reflection-card reveal">
        <p class="card-kicker">Réflexion</p>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `,
  )
  .join('')

const renderExperiences = experienceOutsideSchool
  .map(
    (item) => `
      <article class="experience-card reveal">
        <p class="card-kicker">Hors école</p>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `,
  )
  .join('')

const renderLearningSteps = learningSteps
  .map(
    (step) => `<li>${step}</li>`)
  .join('')

app.innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <a class="brand" href="#hero" aria-label="Retour à l'accueil">DM</a>
      <nav class="nav" aria-label="Navigation principale">
        <a href="#accueil">Accueil</a>
        <a href="#profil">Profil</a>
        <a href="#competences">Compétences</a>
        <a href="#projet">Projet</a>
        <a href="#apprentissage">Apprentissage</a>
        <a href="#hors-ecole">Hors école</a>
        <a href="#contact">Contact</a>
        <a href="#interets">Intérêts</a>
      </nav>
      <a class="topbar-status" href="/cv-diego-macia.pdf" download>Télécharger le CV PDF</a>
    </header>

    <main>
      <section id="accueil" class="hero section">
        <div class="hero-copy reveal">
          <p class="eyebrow">Portfolio interactif · Three.js</p>
          <p class="catchphrase">Apprendre, construire, sécuriser.</p>
          <h1>Diego Macia</h1>
          <p class="hero-lead">
            Étudiant en Bachelor à EPITECH, passionné par l’informatique et orienté vers la
            cybersécurité. Je veux continuer à monter en compétence en programmation, systèmes
            et sécurité informatique.
          </p>

          <div class="pill-row" aria-label="Piliers du profil">
            ${renderPills}
          </div>

          <div class="hero-actions">
            <a class="button button-primary" href="#profil">Découvrir le profil</a>
            <a class="button button-secondary" href="#projet">Voir le projet technique</a>
            <a class="button button-secondary" href="/cv-diego-macia.pdf" download>Télécharger le CV</a>
          </div>
        </div>

        <div class="hero-visual reveal">
          <div class="scene-frame">
            <canvas id="portfolio-scene" aria-label="Scène 3D du portfolio"></canvas>
            <div class="scene-overlay">
              <p class="scene-kicker">Focus</p>
              <p class="scene-title">Cybersecurity mindset</p>
              <p class="scene-text">
                Un univers visuel sobre, lumineux et dynamique pour accompagner le contenu.
              </p>
            </div>
          </div>

          <div class="portrait-card">
            <img src="/portrait.jpg" alt="Portrait professionnel de Diego Macia" />
            <div>
              <p class="card-kicker">Photo pro</p>
              <p class="portrait-caption">Photo professionnelle fournie — recadrée en rond.</p>
            </div>
          </div>

          <div class="hero-stats">
            ${renderStats}
          </div>
        </div>
      </section>

      <section id="profil" class="section grid-two">
        <article class="panel reveal accent-panel">
          <p class="eyebrow">Profil</p>
          <h2>Un parcours technique tourné vers la sécurité</h2>
          <p>
            Je suis Diego Macia, étudiant en Bachelor à EPITECH. Je souhaite évoluer dans le
            domaine de la cybersécurité et développer une expertise technique avancée. Je suis
            passionné par le développement informatique et les technologies en général.
          </p>
        </article>

        <article class="panel reveal">
          <p class="eyebrow">Objectif professionnel</p>
          <h2>Devenir expert en cybersécurité</h2>
          <p>
            Mon objectif est de devenir expert en cybersécurité tout en continuant à renforcer
            mes compétences en programmation, en systèmes et en sécurité informatique.
          </p>
        </article>
      </section>

      <section id="apprentissage" class="section">
        <div class="section-heading reveal">
          <p class="eyebrow">Apprentissage et progression</p>
          <h2>Ce que j’ai appris et comment j’ai progressé</h2>
          <p>
            Cette partie doit montrer la progression sur l’année, pas seulement les résultats.
            Elle relie les projets aux compétences développées et aux prochains objectifs.
          </p>
        </div>

        <div class="learning-grid">
          <article class="panel reveal learning-summary">
            <p class="card-kicker">Progression</p>
            <h3>Une montée en compétence basée sur la pratique</h3>
            <ul class="learning-list">
              ${renderLearningSteps}
            </ul>
          </article>

          <div class="reflections-grid">
            ${renderReflections}
          </div>
        </div>
      </section>

      <section id="competences" class="section">
        <div class="section-heading reveal">
          <p class="eyebrow">Compétences techniques</p>
          <h2>Une base solide à faire monter en puissance</h2>
          <p>
            Le positionnement actuel est volontairement transparent: niveau initial sur plusieurs
            langages, avec une envie claire de progresser rapidement sur le fond et la méthode.
          </p>
        </div>

        <div class="skills-grid">
          ${renderSkills}
        </div>
      </section>

      <section id="projet" class="section">
        <div class="section-heading reveal">
          <p class="eyebrow">Expérience / Projet</p>
          <h2>Robot distributeur de pilules</h2>
        </div>

        <article class="panel project-panel reveal">
          <div class="project-grid">
            <div>
              <p class="project-intro">
                Projet collaboratif technique où j’ai participé au développement du firmware et à
                la mise en place de la logique de contrôle du robot.
              </p>

              <ul class="project-list">
                ${renderProjectMilestones}
              </ul>
            </div>

            <aside class="project-summary">
              <p class="summary-label">Apprentissages clés</p>
              <p>
                Travail d’équipe, compréhension d’un système embarqué, coordination technique et
                structuration d’une logique de contrôle fiable.
              </p>
            </aside>
          </div>
        </article>
      </section>

      <section id="hors-ecole" class="section">
        <div class="section-heading reveal">
          <p class="eyebrow">Expériences hors école</p>
          <h2>Ce que je développe en dehors des projets académiques</h2>
          <p>
            Cette section est importante pour montrer une curiosité continue et des expériences qui
            dépassent le cadre purement scolaire.
          </p>
        </div>

        <div class="experiences-grid">
          ${renderExperiences}
        </div>
      </section>

      <section id="interets" class="section">
        <div class="section-heading reveal">
          <p class="eyebrow">Centres d’intérêt</p>
          <h2>Ce qui m’anime au quotidien</h2>
        </div>

        <div class="interests-grid">
          ${renderInterests}
        </div>
      </section>

      <section id="contact" class="section grid-two">
        <article class="panel reveal contact-panel">
          <p class="eyebrow">Contact information</p>
          <h2>Restons en contact</h2>
          <ul class="contact-list">
            ${renderContacts}
          </ul>
        </article>

        <article class="panel reveal contact-panel">
          <p class="eyebrow">Contact form</p>
          <h2>Envoyer un message</h2>
          <form id="contact-form" class="contact-form">
            <label>
              Nom
              <input name="name" type="text" placeholder="Votre nom" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="votre.email@exemple.com" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Expliquez votre besoin" required></textarea>
            </label>
            <button class="button button-primary" type="submit">Préparer l'email</button>
            <p class="form-note">Sans backend, le formulaire ouvre votre client mail avec les données saisies.</p>
          </form>
        </article>
      </section>

      <section class="section">
        <article class="panel closing-panel reveal">
          <p class="eyebrow">Version à compléter</p>
          <h2>Langues, stages, certifications et liens complémentaires</h2>
          <p>
            Le site couvre maintenant les exigences essentielles. Il reste des champs à enrichir
            avec tes vraies coordonnées, tes langues, tes certifications et d’autres projets si tu
            veux le rendre encore plus personnel.
          </p>
        </article>
      </section>
    </main>

    <footer class="footer">
      <p>Portfolio Three.js pour Diego Macia · EPITECH Bachelor</p>
      <a href="#hero">Retour en haut</a>
    </footer>
  </div>
`

const sceneCanvas = document.querySelector<HTMLCanvasElement>('#portfolio-scene')

if (sceneCanvas) {
  setupScene(sceneCanvas)
}

const contactForm = document.querySelector<HTMLFormElement>('#contact-form')

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(contactForm)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const message = String(formData.get('message') ?? '')
    const subject = encodeURIComponent(`Contact portfolio - ${name}`)
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`)

    window.location.href = `mailto:contact@diegomacia.dev?subject=${subject}&body=${body}`
  })
}

setupRevealAnimations()

function setupRevealAnimations() {
  const targets = document.querySelectorAll<HTMLElement>('.reveal')

  if (!('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px',
    },
  )

  targets.forEach((target) => observer.observe(target))
}

function setupScene(canvas: HTMLCanvasElement) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.setClearColor(0x07111f, 1)

  scene.background = new THREE.Color(0x07111f)
  scene.fog = new THREE.Fog(0x07111f, 10, 26)

  const group = new THREE.Group()
  scene.add(group)

  const ambient = new THREE.AmbientLight(0xb8dfff, 2.3)
  scene.add(ambient)

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.4)
  keyLight.position.set(4, 5, 6)
  scene.add(keyLight)

  const rimLight = new THREE.PointLight(0x6ee7ff, 16, 30)
  rimLight.position.set(-5, -2, 6)
  scene.add(rimLight)

  const nucleus = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.08, 0.32, 220, 32),
    new THREE.MeshNormalMaterial(),
  )
  group.add(nucleus)

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.45, 2),
    new THREE.MeshPhysicalMaterial({
      color: 0xdff6ff,
      metalness: 0.25,
      roughness: 0.1,
      clearcoat: 0.7,
      clearcoatRoughness: 0.08,
      transparent: true,
      opacity: 0.82,
    }),
  )
  group.add(core)

  const shell = new THREE.Mesh(
    new THREE.TorusGeometry(2.05, 0.1, 24, 160),
    new THREE.MeshBasicMaterial({
      color: 0x9fe8ff,
      transparent: true,
      opacity: 0.72,
      wireframe: true,
    }),
  )
  shell.rotation.x = Math.PI * 0.58
  group.add(shell)

  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(2.7, 40, 40),
    new THREE.MeshBasicMaterial({ color: 0x9fe8ff, wireframe: true, transparent: true, opacity: 0.2 }),
  )
  group.add(halo)

  const accentOrbit = new THREE.Mesh(
    new THREE.TorusGeometry(2.75, 0.03, 16, 180),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.32 }),
  )
  accentOrbit.rotation.y = Math.PI * 0.25
  accentOrbit.rotation.x = Math.PI * 0.2
  group.add(accentOrbit)

  const lightRings = [
    new THREE.Mesh(
      new THREE.TorusGeometry(3.05, 0.06, 16, 180),
      new THREE.MeshBasicMaterial({ color: 0x8fdcff, transparent: true, opacity: 0.24 }),
    ),
    new THREE.Mesh(
      new THREE.TorusGeometry(1.85, 0.04, 16, 180),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.16 }),
    ),
  ]

  lightRings[0].rotation.x = Math.PI * 0.5
  lightRings[1].rotation.y = Math.PI * 0.35

  lightRings.forEach((ring) => group.add(ring))

  const beams = [
    new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 5.8, 0.08),
      new THREE.MeshBasicMaterial({ color: 0xbff4ff, transparent: true, opacity: 0.16 }),
    ),
    new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 4.8, 0.08),
      new THREE.MeshBasicMaterial({ color: 0x7aa2ff, transparent: true, opacity: 0.16 }),
    ),
  ]

  beams[0].rotation.z = Math.PI * 0.35
  beams[1].rotation.z = -Math.PI * 0.3
  beams.forEach((beam) => group.add(beam))

  const satellites = new THREE.Group()
  const satelliteAngles = [0, 1.7, 3.4]

  satelliteAngles.forEach((angle, index) => {
    const satellite = new THREE.Mesh(
      new THREE.SphereGeometry(0.22 + index * 0.04, 20, 20),
      new THREE.MeshStandardMaterial({
        color: index === 1 ? 0x7dd3fc : 0xc8f3ff,
        emissive: index === 2 ? 0x0c4a6e : 0x1f2937,
        emissiveIntensity: 0.35,
        roughness: 0.18,
        metalness: 0.5,
      }),
    )
    satellite.position.set(Math.cos(angle) * 2.9, Math.sin(angle * 0.8) * 0.8, Math.sin(angle) * 2.4)
    satellites.add(satellite)
  })

  group.add(satellites)

  const particlesGeometry = new THREE.BufferGeometry()
  const particleCount = 220
  const particlePositions = new Float32Array(particleCount * 3)

  for (let index = 0; index < particleCount; index += 1) {
    const spread = 7.5
    particlePositions[index * 3] = (Math.random() - 0.5) * spread
    particlePositions[index * 3 + 1] = (Math.random() - 0.5) * spread
    particlePositions[index * 3 + 2] = (Math.random() - 0.5) * spread
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))

  const particles = new THREE.Points(
    particlesGeometry,
    new THREE.PointsMaterial({
      color: 0xc7f3ff,
      size: 0.05,
      transparent: true,
      opacity: 0.92,
      sizeAttenuation: true,
    }),
  )

  scene.add(particles)

  const pointer = { x: 0, y: 0 }
  const target = { x: 0, y: 0 }

  const updatePointer = (clientX: number, clientY: number) => {
    target.x = (clientX / window.innerWidth) * 2 - 1
    target.y = (clientY / window.innerHeight) * 2 - 1
  }

  const handlePointerMove = (event: PointerEvent) => updatePointer(event.clientX, event.clientY)
  const handleResize = () => {
    const { width, height } = canvas.getBoundingClientRect()
    const safeWidth = Math.max(width, 1)
    const safeHeight = Math.max(height, 1)

    camera.aspect = safeWidth / safeHeight
    camera.updateProjectionMatrix()
    renderer.setSize(safeWidth, safeHeight, false)
  }

  window.addEventListener('pointermove', handlePointerMove)
  window.addEventListener('resize', handleResize)
  handleResize()

  camera.position.set(0, 0.15, 8.2)
  camera.lookAt(0, 0, 0)

  let frame = 0

  const animate = () => {
    frame += 1

    if (!reduceMotion) {
      pointer.x += (target.x - pointer.x) * 0.045
      pointer.y += (target.y - pointer.y) * 0.045

      group.rotation.y = pointer.x * 0.45 + frame * 0.0025
      group.rotation.x = pointer.y * 0.2 + Math.sin(frame * 0.003) * 0.08
      group.position.y = Math.sin(frame * 0.004) * 0.14
      nucleus.rotation.x += 0.008
      nucleus.rotation.y += 0.012
      camera.position.x = pointer.x * 0.55
      camera.position.y = 0.15 + pointer.y * 0.45
      satellites.rotation.y += 0.006
      halo.rotation.z += 0.002
      shell.rotation.z += 0.0015
      particles.rotation.y += 0.0008
    }

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }

  animate()
}
