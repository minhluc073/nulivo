import Link from "next/link";


export default function SidebarProfile(){
    return(
        <aside className="sidebar-profile-wrap fixed-sidebar">
            <div className="box-title">
                <div className="h8 text_black-3">SlideScan</div>
                <span className="text-7">2.384 folower</span>
            </div>
            <Link href="#" className="tf-btn btn-line">Follow</Link>
        </aside>
    )
}