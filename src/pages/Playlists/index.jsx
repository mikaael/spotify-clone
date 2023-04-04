import logoSpotify from "../../assets/logoSpotify.svg";
import capaPlaylist from "../../../assets/playlists/piano.jpg";
import './index.css';
import homeIcon from './home.svg';

function Playlists(){
    return (
        <div className="flex text-slate-100">
            {/* navbar */}
            <div className="bg-black w-[18%] min-h-screen p-6">
                <div className="text-2xl font-semibold w-32 flex items-center mb-8">
                    <img src={logoSpotify} alt="Logo do Spotify" className="w-32"/>
                </div>
                
                <div className="flex flex-col gap-4 mb-10">
                    <div className="text-slate-100 flex gap-4 items-center">
                        <div>
                            <svg role="img" fill="#ffffff" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 gQUQL home-active-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path></svg>
                        </div>
                        <div className="font-extrabold text-xs">
                            Início
                        </div>
                    </div>
                    <div className="text-[#c4c4c4] flex gap-4 items-center">
                        <div>
                            <svg role="img" fill="#c4c4c4" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 gQUQL search-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>
                        </div>
                        <div className="text-xs font-medium">
                            Buscar
                        </div>
                    </div>
                    <div className="text-[#c4c4c4] flex gap-4 items-center">
                        <div>
                            <svg role="img" fill="#c4c4c4" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 gQUQL collection-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path></svg>
                        </div>
                        <div className="text-xs">
                            Biblioteca
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-4">
                    <div className="text-[#c4c4c4] flex gap-4 items-center">
                        <div className="h-[24px] aspect-square bg-[#c4c4c4] flex items-center justify-center rounded-sm">
                            <svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
                        </div>
                        <div className="text-xs">
                            Criar playlist
                        </div>
                    </div>
                    <div className="text-[#c4c4c4] flex gap-4 items-center">
                        <div className="h-[24px] aspect-square gradientIcon flex items-center justify-center rounded-sm">
                            <svg role="img"  fill="#c4c4c4" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path></svg>
                        </div>
                        <div className="text-xs">
                            Músicas Curtidas
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#1b1b1b] w-[82%] py-8 px-10 flex flex-col">
                <div id="title" className="font-extrabold text-xl py-6">
                    Playlists
                </div>
                
                <div id="playlists" className="flex justify-between w-full gap-4 flex-wrap">
                    <div id="playlist" className="w-[10.7rem] flex justify-center p-4 flex-col gap-2 bg-zinc-900 rounded-md drop-shadow-md">
                        <img src={capaPlaylist} alt="" className="mb-2" />
                        <div id="title" className="font-bold">Peaceful Piano</div>
                        <div id="description" className="text-neutral-400 font-normal text-sm">Relax and indulge with beautiful piano pieces.</div>
                    </div>
                    <div id="playlist" className="w-[10.7rem] flex justify-center p-4 flex-col gap-2 bg-zinc-900 rounded-md drop-shadow-md">
                        <img src={capaPlaylist} alt="" className="mb-2" />
                        <div id="title" className="font-bold">Peaceful Piano</div>
                        <div id="description" className="text-neutral-400 font-normal text-sm">Relax and indulge with beautiful piano pieces.</div>
                    </div>
                    <div id="playlist" className="w-[10.7rem] flex justify-center p-4 flex-col gap-2 bg-zinc-900 rounded-md drop-shadow-md">
                        <img src={capaPlaylist} alt="" className="mb-2" />
                        <div id="title" className="font-bold">Peaceful Piano</div>
                        <div id="description" className="text-neutral-400 font-normal text-sm">Relax and indulge with beautiful piano pieces.</div>
                    </div>
                    <div id="playlist" className="w-[10.7rem] flex justify-center p-4 flex-col gap-2 bg-zinc-900 rounded-md drop-shadow-md">
                        <img src={capaPlaylist} alt="" className="mb-2" />
                        <div id="title" className="font-bold">Peaceful Piano</div>
                        <div id="description" className="text-neutral-400 font-normal text-sm">Relax and indulge with beautiful piano pieces.</div>
                    </div>
                    <div id="playlist" className="w-[10.7rem] flex justify-center p-4 flex-col gap-2 bg-zinc-900 rounded-md drop-shadow-md">
                        <img src={capaPlaylist} alt="" className="mb-2" />
                        <div id="title" className="font-bold">Peaceful Piano</div>
                        <div id="description" className="text-neutral-400 font-normal text-sm">Relax and indulge with beautiful piano pieces.</div>
                    </div>
                </div>

                <div id="title" className="font-extrabold text-xl py-6">
                    Playlists
                </div>
                
                <div id="playlists" className="flex justify-between w-full gap-4 flex-wrap">
                    <div id="playlist" className="w-[10.7rem] flex justify-center p-4 flex-col gap-2 bg-zinc-900 rounded-md drop-shadow-md">
                        <img src={capaPlaylist} alt="" className="mb-2" />
                        <div id="title" className="font-bold">Peaceful Piano</div>
                        <div id="description" className="text-neutral-400 font-normal text-sm">Relax and indulge with beautiful piano pieces.</div>
                    </div>
                    <div id="playlist" className="w-[10.7rem] flex justify-center p-4 flex-col gap-2 bg-zinc-900 rounded-md drop-shadow-md">
                        <img src={capaPlaylist} alt="" className="mb-2" />
                        <div id="title" className="font-bold">Peaceful Piano</div>
                        <div id="description" className="text-neutral-400 font-normal text-sm">Relax and indulge with beautiful piano pieces.</div>
                    </div>
                    <div id="playlist" className="w-[10.7rem] flex justify-center p-4 flex-col gap-2 bg-zinc-900 rounded-md drop-shadow-md">
                        <img src={capaPlaylist} alt="" className="mb-2" />
                        <div id="title" className="font-bold">Peaceful Piano</div>
                        <div id="description" className="text-neutral-400 font-normal text-sm">Relax and indulge with beautiful piano pieces.</div>
                    </div>
                    <div id="playlist" className="w-[10.7rem] flex justify-center p-4 flex-col gap-2 bg-zinc-900 rounded-md drop-shadow-md">
                        <img src={capaPlaylist} alt="" className="mb-2" />
                        <div id="title" className="font-bold">Peaceful Piano</div>
                        <div id="description" className="text-neutral-400 font-normal text-sm">Relax and indulge with beautiful piano pieces.</div>
                    </div>
                    <div id="playlist" className="w-[10.7rem] flex justify-center p-4 flex-col gap-2 bg-zinc-900 rounded-md drop-shadow-md">
                        <img src={capaPlaylist} alt="" className="mb-2" />
                        <div id="title" className="font-bold">Peaceful Piano</div>
                        <div id="description" className="text-neutral-400 font-normal text-sm">Relax and indulge with beautiful piano pieces.</div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Playlists;