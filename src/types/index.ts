export type FormCar = {
  model: string,
  country: string,
  year: number,
  price: number,
}

export type Car = FormCar & {
  id: string,
}
