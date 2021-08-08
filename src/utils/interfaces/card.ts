import IconNameProps from "./iconDictionaryItem"

type Card = {
    id : string
    type: string
    carousel: boolean,
    title: string,
    picture: string,
    onClick: ()=>void
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
    icons: IconNameProps[],
    price: number
}

type CardProps = 
    | SmallCard
    | MediumCard
    | LargeCard

export default CardProps;