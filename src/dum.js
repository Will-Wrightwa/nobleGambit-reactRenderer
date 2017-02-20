class A {
  constructor() {

  }
  setRenderer(renderer){
    this.renderer = renderer
  }
}

class Rend {
  constructor() {

  }
  render(){
    console.log("foo");
  }

}


let objA = new A()
objA.setRenderer(Rend)
renderer = new objA.renderer()

renderer.render()
