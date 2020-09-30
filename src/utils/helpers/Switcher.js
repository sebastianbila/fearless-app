export default class Switcher {
    constructor(objects, setObjects) {
        this.objects = objects
        this.setObjects = setObjects
        this.newObjects = []
    }

    switchById(id) {
        this.objects.map(item => {
            item.selected = item.id === id
            this.newObjects.push(item)
        })
        this.setObjects(this.newObjects)
    }

    toggleItem(id) {
        this.objects.map(item => {
            if (item.id === id) item.selected = !item.selected
            this.newObjects.push(item)
        })
        this.setObjects(this.newObjects)
    }

    getNewObjects() {
        return this.newObjects
    }
}

