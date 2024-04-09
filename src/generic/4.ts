/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IProps {
 title:string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<IProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export { };


//    interface  повинен бути один  і використовоуємо interface  при оголошення класу Page
// interface IProps {}
// class Page extends Component<IProps> {}