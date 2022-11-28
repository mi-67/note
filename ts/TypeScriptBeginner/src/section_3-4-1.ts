interface User<T> {
  name: string
  child: T
}

interface Family<Parent, Child> {
  mother: Parent
  father: Parent
  child: Child
}
