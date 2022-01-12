const FlagCard = ({ name, emoji }) => {
    return (
        <div className="shadow-[0_0_5px_0_rgba(0,0,0,0.2)] w-full h-full rounded-xl p-5" >
            <div> {emoji} </div>
            <div className="py-5 text-[24px] font-semibold" >
                {name}
            </div>
            <div className="text-[#71717A]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ex nunc molestie.</div>
         </div>
    );
}

export default FlagCard;