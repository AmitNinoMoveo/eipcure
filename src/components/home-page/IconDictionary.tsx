import "../../assets/styles/components/home-page/icon-dictionary.scss";
import React, { FC } from 'react';
import IconNameProps from "../../utils/interfaces/iconDictionaryItem";
import iconsDictionaryData from "../../utils/constants/iconsDictionaryData";

const IconDictionaryComponent = () => {

    const IconName: FC<IconNameProps> = ({icon, name}:IconNameProps)=>(
        <div className="icon">
            <img src={icon} alt={name} />
            <p>{name}</p>
        </div>
    )

    const IconsContainer = ()=>(
        <div className="icons-container">
            {
                iconsDictionaryData.map((iconItem: IconNameProps, i)=><IconName key={i}  name={iconItem.name} icon={iconItem.icon} />)
            }
        </div>
    )

    return (
        <section className="home-icon-dictioanry-container">
            <h2>THE MEANING OF OUR ICONS :</h2>
            <IconsContainer />
        </section>
    )
}

export default IconDictionaryComponent
