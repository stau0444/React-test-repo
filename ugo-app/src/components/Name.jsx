
export default function Name({name,isSpecial}) {
    return(<h2>{name}{isSpecial && <b>*</b>}</h2>);
}