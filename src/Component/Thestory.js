import React from 'react';

const Thestory = () =>{
    return(
        <div>
            <div className="container">
                <h1 className="the_Story">The Story</h1>
                <div className="Story_bx_in">
                    <div className="Story_bx1">
                        <div className="plce_st">
                            <span className="story_img1"><img src={require ('./images/story_img1.jpg').default} alt="" className="img" /></span>
                            <div className="story_img_tx">
                                <h4>The Palace</h4>
                                <p>The Last of india's labled royal palaces, Umaid Bhawan was created by Maharaja Umaid singh. Frorm its opening frand dinner in 1943, the palace wave webs of magic, with its soaring central dome, acres of garden, exquisite subterranean pool, and the spakling elegance of its art Deco ambience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="Story_bx2">
                        <div className="plce_st2">
                            <span className="story_img2"><img src={require ('./images/story_img2.jpg').default} alt="" className="img" /></span>
                            <div className="story_img_tx2">
                                <h4>The Shop</h4>
                                <p>The Palace Collection Shop, just off the central rotunda, was created by the current Maharaja, H.H. Gaj Singh of Jodhpur/Marwar, and his family, to share the memories and the magic with you. Contemporary designers and traditional master crafts persons create for us truly the most beautiful things in the realm.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
export default Thestory;