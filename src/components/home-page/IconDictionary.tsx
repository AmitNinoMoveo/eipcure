import "../../assets/styles/components/home-page/icon-dictionary.scss";
import React, { FC } from 'react';
import IconNameProps from "../../utils/interfaces/iconDictionaryItem";
import mockIconsDictionaryData from "../../utils/constants/mockData/mockIconsDictionaryData";

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
                mockIconsDictionaryData.map((iconItem: IconNameProps, i)=><IconName key={i}  name={iconItem.name} icon={iconItem.icon} />)
            }
        </div>
    )

    return (
        <section className="home-icon-dictioanry-container">
            <h2 className="text-uppercase" >The meaning of our icons:</h2>
            <IconsContainer />
        </section>
    )
}

export default IconDictionaryComponent
