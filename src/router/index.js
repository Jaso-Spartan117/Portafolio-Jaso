import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => res.render('index', {title: 'Inicio'}))

router.get('/about', (req, res) => res.render('about', {title: 'Sobre mí'}))

router.get('/skills', (req, res) => res.render('skills', {title: 'Mis Skills'}))

router.get('/trabajos', (req, res) => res.render('trabajos', {title: 'Proyectos Realizados'}))

router.get('/contact', (req, res) => res.render('contact', {title: 'Contáctame'}))

export default router