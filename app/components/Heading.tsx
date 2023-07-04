'use client';

interface HeadingProps {
    title: String;
    subtitle?: String;
    center?: Boolean;

}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {

    return(
        <div className={center ? 'center-text' : 'text-start'}>
            <div className="text-2xl font-bold">
                {title}
            </div>
            <div className="font-light text-neutral-500 mt-2">
                {subtitle}
            </div>
        </div>
    );
}
export default Heading;