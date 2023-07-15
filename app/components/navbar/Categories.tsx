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
        description: "在宅医療の概要や基本的な知識"
    },
    {
        label: '歩行',
        icon: FaWalking,
        description: "歩行の介助や気をつけるポイント"
    }, 
    {
        label: '車椅子',
        icon: TbWheelchair,
        description: "車椅子の介助や移乗の方法"
    },
    {
        label: 'ベッド',
        icon: FaBed,
        description: "ベッド上でのケアのポイント"
    },
    {
        label: '栄養',
        icon: TbPacman,
        description: "療養に必要な栄養管理について"
    },
    {
        label: '薬',
        icon: GiMedicines,
        description: "薬の知識や服薬方法について"
    },
    {
        label: '注射',
        icon: BiInjection,
        description: "注射や点滴について"
    },
    {
        label: '処置',
        icon: FaBriefcaseMedical,
        description: "処置について"
    },
    {
        label: '検査',
        icon: FaXRay,
        description: "レントゲンやCTなどの検査について"
    },
    {
        label: '採血',
        icon: GiDrippingTube,
        description: "採血データの基本的な項目について"
    },
    {
        label: '呼吸器',
        icon: FaHeadSideMask,
        description: "NPPVや人工呼吸器の基本的知識や使用方法について"
    },
    {
        label: '筋トレ',
        icon: GiMuscleUp,
        description: "筋力アップやエクササイズについて"
    },
    {
        label: 'その他',
        icon: FaHandHoldingMedical,
        description: '在宅医療に関わるその他の項目'
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
