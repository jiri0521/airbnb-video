'use client';

import Container from "../Container";
import { IoDiamond } from 'react-icons/io5';
import { BsSnow } from 'react-icons/bs';
import { FaSkiing, FaBed, FaWalking, FaXRay, FaFileMedicalAlt, FaClinicMedical, FaBriefcaseMedical, FaHandHoldingMedical, FaHeadSideMask} from 'react-icons/fa';
import { FcElectricalSensor } from 'react-icons/fc';
import { BiInjection } from 'react-icons/bi';
import { TbBeach, TbMountain, TbPool, TbPacman, TbWheelchair} from 'react-icons/tb';
import { GiBarn, GiBoatFishing,GiCactus,GiCastle,GiCaveEntrance,GiForestCamp,GiIsland, GiMedicines, GiElectric, GiWindmill, GiDrippingTube, GiMuscleUp } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";


export const categories = [
    {
        label: '在宅',
        icon: FaClinicMedical,
        description: "This property has camping activities!"
    },
    {
        label: '歩行',
        icon: FaWalking,
        description: "This property is on an Island!"
    }, 
    {
        label: '車椅子',
        icon: TbWheelchair,
        description: "This property is close to beach!"
    },
    {
        label: 'ベッド',
        icon: FaBed,
        description: "This property has windmills!"
    },
    {
        label: '栄養',
        icon: TbPacman,
        description: "This property is modern!"
    },
    {
        label: '薬',
        icon: GiMedicines,
        description: "This property is the countryside!"
    },
    {
        label: '注射',
        icon: BiInjection,
        description: "This property has a pool!"
    },
    {
        label: '処置',
        icon: FaBriefcaseMedical,
        description: "This property has camping activities!"
    },
    {
        label: '検査',
        icon: FaXRay,
        description: "This property has skiing activities!"
    },
    {
        label: '採血',
        icon: GiDrippingTube,
        description: "This property is close to Lake!"
    },
    {
        label: '呼吸器',
        icon: FaHeadSideMask,
        description: "This property is an a castle!"
    },
    {
        label: '筋トレ',
        icon: GiMuscleUp,
        description: "This property has camping activities!"
    },
    {
        label: 'その他',
        icon: FaHandHoldingMedical,
        description: 'This property is in a spooky cave!'
      }
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
            <div className="
                pt-4
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
