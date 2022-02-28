import React from "react";
import PlayFilter from "../components/PlayFilters/PlayFilters.Component";
import Poster from "../components/Poster/Poster.Component";

const Plays = () => {
    return(
        <>
            <div className="container mx-auto px-4 my-10">
                <div className="w-full lg:flex lg:flex-row-reverse gap-4">
                    <div className="lg:w-3/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4">Plays in Hyderabad</h2>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323374-cdtrnsmynw-portrait.jpg" title="Rependi by Samahaara" subtitle="Lamakaan: Hyderabad"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323374-cdtrnsmynw-portrait.jpg" title="Rependi by Samahaara" subtitle="Lamakaan: Hyderabad"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323374-cdtrnsmynw-portrait.jpg" title="Rependi by Samahaara" subtitle="Lamakaan: Hyderabad"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323374-cdtrnsmynw-portrait.jpg" title="Rependi by Samahaara" subtitle="Lamakaan: Hyderabad"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323374-cdtrnsmynw-portrait.jpg" title="Rependi by Samahaara" subtitle="Lamakaan: Hyderabad"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323374-cdtrnsmynw-portrait.jpg" title="Rependi by Samahaara" subtitle="Lamakaan: Hyderabad"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323374-cdtrnsmynw-portrait.jpg" title="Rependi by Samahaara" subtitle="Lamakaan: Hyderabad"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323374-cdtrnsmynw-portrait.jpg" title="Rependi by Samahaara" subtitle="Lamakaan: Hyderabad"/>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlayFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
                        </div>
                        <div>
                            <PlayFilter title="Language" tags={["English", "Hindi", "Telugu"]}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plays;