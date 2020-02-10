export class Tamagotchi {
  constructor(name){
    this.name = name;
    this.hunger = 100;
    this.happy = 100;
  }

  setHunger() {
    setInterval(() => {
      this.hunger--;
    }, 5000);
  }

  setHappy() {
    setInterval(() => {
      this.happy--;
    }, 5000);
  }

  feed() {
    this.hunger = 100;
  }

  pet(){
    this.happy = 100;
  }

  die(){
    if((this.hunger === 0) && (this.happy === 0)){
      return true;
    } else{
      return false;
    }
  }

}