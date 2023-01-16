import Image from 'next/image'

interface Props {
    src: string,
    alt: string,
    height: number,
    width: number
}

const CompanyLogo = ({src, alt, height, width}: Props) => {
    return (
        <Image
            src = {src}
            alt = {alt}
            height = {height}
            width = {width}
        />
    )
}

export default CompanyLogo