export class Router {
    //Constructor
    constructor(paths) {
        this.paths = paths
        initRouter()
    }
    //Método para iniciar el router
    initRouter() {
        const { location: { pathname = '/' } } = window
        const URI = pathname === '/' ? 'title' : pathname.replace('/', '')
        this.load(URI)
    }
    //Método para cargar las vistas 
    load(page = 'title') {
        const { paths } = this
        const { path, template } = paths[page] || paths.error
        const $CONTAINER = document.querySelector('#content')
        window.history.pushState({}, 'done', path)
    }
}