function Item1() {
    let arr_item = ['3D Jewelry modeling (3dm)', '3D Jewelry modeling for printing (stl)', '3D Jewelry modeling for rendering', '3D Jewelry sculpturing', '3D Jewelry rendering (photo/video)', 
               '3D Jewelry 360 degree', '3D Game modeling and visualization', 
            ];

        
            
        

    return (
        <>
        {/* amen angam chpopoxelu hamar stexcel loop vor bolor itemneri vra fra u 0-6 stexci itemne
        vory <div>-i mej a u classname-y talis a amen hatic item +1 u ir mej sstexcum a mi hat label u progres */}
            <div className="skill_cont1_item">
                <label>'3D Jewelry modeling (3dm)</label>
                <progress value={90} max={100} ></progress>
            </div>
            <div className="skill_cont1_item">
                <label>'3D Jewelry modeling for printing (stl)'</label>
                <progress value={90} max={100} ></progress>
            </div>
            <div className="skill_cont1_item">
                <label>'3D Jewelry modeling for rendering'</label>
                <progress value={90} max={100} ></progress>
            </div>
            <div className="skill_cont1_item">
                <label>'3D Jewelry sculpturing'</label>
                <progress value={90} max={100} ></progress>
            </div>
            <div className="skill_cont1_item">
                <label>'3D Jewelry rendering (photo/video)'</label>
                <progress value={90} max={100} ></progress>
            </div>
            <div className="skill_cont1_item">
                <label>'3D Jewelry 360 degree'</label>
                <progress value={90} max={100} ></progress>
            </div>
            <div className="skill_cont1_item">
                <label>'3D Game modeling and visualization'</label>
                <progress value={90} max={100} ></progress>
            </div>
        </>
    )
}

export default Item1;