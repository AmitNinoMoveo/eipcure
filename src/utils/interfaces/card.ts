type Card = {
    id : number
    type: string
    carousel: boolean,
    title: string,
    picture: string
}
type SmallCard = Card & {
    type: 'small'
}
type MediumCard = Card & {
    type: 'medium'
    subTitle: string
}
type LargeCard = Card & {
    type: 'large'
    discription: string,
    icon: string,
    price: number
}

type CardProps = 
    | SmallCard
    | MediumCard
    | LargeCard

export default CardProps;