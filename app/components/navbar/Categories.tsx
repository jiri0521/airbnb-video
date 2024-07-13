'use client';

import Container from "../Container";
import { IoDiamond } from 'react-icons/io5';
import { BsSnow } from 'react-icons/bs';
import { FaSkiing, FaBed, FaWalking, FaXRay, FaFileMedicalAlt, FaClinicMedical, FaBriefcaseMedical, FaHandHoldingMedical, FaHeadSideMask} from 'react-icons/fa';
import { FcElectricalSensor } from 'react-icons/fc';
import { BiHomeAlt, BiInjection } from 'react-icons/bi';
import { TbBeach, TbMountain, TbPool, TbPacman, TbWheelchair} from 'react-icons/tb';
import { GiBarn, GiBoatFishing,GiCactus,GiCastle,GiCaveEntrance,GiForestCamp,GiIsland, GiMedicines, GiElectric, GiWindmill, GiDrippingTube, GiMuscleUp } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";


export const categories = [
    {
        label: '',
        icon:BiHomeAlt,
        description: "This property has camping activities!"
    },
    {
        label: '生活関連',
        icon: FaHandHoldingMedical,
        description: '座る・立つ・歩く・着替えるなど'
      },
    //{
      //  label: '歩行',
      //  icon: FaWalking,
      //  description: "This property is on an Island!"
    //}, 
    {
        label: '車椅子',
        icon: TbWheelchair,
        description: "車椅子の方の介助"
    },
    {
        label: 'ベッド',
        icon: FaBed,
        description: "ベッド上での介助"
    },
    {
        label: '栄養',
        icon: TbPacman,
        description: "食事の介助"
    },
    //{
      //  label: '薬',
      //  icon: GiMedicines,
      //  description: "This property is the countryside!"
    //},
    //{
      //  label: '注射',
      //  icon: BiInjection,
      //  description: "This property has a pool!"
    //},
    //{
      //  label: '処置',
      //  icon: FaBriefcaseMedical,
      //  description: "This property has camping activities!"
    //},
    //{
      //  label: '検査',
      //  icon: FaXRay,
      //  description: "This property has skiing activities!"
    //},
    //{
      //  label: '採血',
      //  icon: GiDrippingTube,
      //  description: "This property is close to Lake!"
    //},
    //{
     //   label: '呼吸器',
     //   icon: FaHeadSideMask,
     //   description: "This property is an a castle!"
    //},
    {
        label: '筋トレ',
        icon: GiMuscleUp,
        description: "鍛え方。ストレッチ"
    },
   
    ]



const Categories = () =>{
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname == '/';
    if (!isMainPage) {
        return null;
    }

    return(
       <Container>
            <div className="font-semibold">見たい動画のジャンルを選んでください</div>
            <div className="
                flex
                flex-row
                items-center
                justify-between
                overflow-x-auto
            ">
                {categories.map((item) => (
                    <CategoryBox
                     key={item.label}
                     label={item.label}
                     selected={category == item.label}
                     icon={item.icon}
                    />
                ))}
            </div>
       </Container>
    );
}
export default Categories;
