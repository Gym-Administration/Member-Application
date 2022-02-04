const ProfileImage = ({avatar}) => {
    return(
        <>
            <div>
                <img 
                    src={avatar} 
                    alt="" 
                    className="img"
                />
            </div>
        </>
    );
}

export {ProfileImage}