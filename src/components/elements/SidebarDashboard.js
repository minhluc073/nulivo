'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SidebarDashboard() {
	const pathname = usePathname()
	return (
		<>
			<div className="sidebar-menu-dashboard">
				<ul className="box-menu-dashboard fixed-sidebar">
					<li className={`nav-menu-item ${pathname === '/dashboard' ? 'active' : ''}`}>
						<Link className="nav-menu-link" href="/dashboard"><span className="icon icon-dashboard" /> Home</Link>
					</li>
					<li className={`nav-menu-item ${pathname === '/profile-setting' ? 'active' : ''}`}>
						<Link className="nav-menu-link" href="/profile-setting"><span className="icon icon-account-line-3" />Profile</Link>
					</li>
					<li className={`nav-menu-item ${pathname === '/my-invoices' ? 'active' : ''}`}>
						<Link className="nav-menu-link" href="/setting"><span className="icon icon-settings" /> Setting</Link>
					</li>
					<li className={`nav-menu-item ${pathname === '/download' ? 'active' : ''}`}>
						<Link className="nav-menu-link" href="/download"><span className="icon icon-download" />Downloads</Link>
					</li>
					<li className={`nav-menu-item ${pathname === '/manage-items' ? 'active' : ''}`}>
						<Link className="nav-menu-link" href="/manage-items"><span className="icon icon-manage" /> Manage items</Link>
					</li>
					<li className={`nav-menu-item ${pathname === '/upload-items' ? 'active' : ''}`}>
						<Link className="nav-menu-link" href="/upload-items"><span className="icon icon-upload1" /> Upload item</Link>
					</li>
					<li className={`nav-menu-item ${pathname === '/earnings' ? 'active' : ''}`}>
						<Link className="nav-menu-link" href="/earnings"><span className="icon icon-diamond" /> Earnings</Link>
					</li>
					<li className={`nav-menu-item ${pathname === '/statements' ? 'active' : ''}`}>
						<Link className="nav-menu-link" href="/statements"><span className="icon icon-browser-2" /> Statements</Link>
					</li>
					<li className={`nav-menu-item ${pathname === '/payouts' ? 'active' : ''}`}>
						<Link className="nav-menu-link" href="/payouts"><span className="icon icon-calculator" /> Payouts</Link>
					</li>
					<li className={`nav-menu-item ${pathname === '/become-author-dashboard' ? 'active' : ''}`}>
						<Link className="nav-menu-link" href="/become-author-dashboard"><span className="icon icon-briefcase" /> Become an author</Link>
					</li>
					<li className={`nav-menu-item ${pathname === '/verify-1' ? 'active' : ''}`}>
						<Link className="nav-menu-link" href="/verify-1"><span className="icon icon-comment-user" /> Verify account</Link>
					</li>
					<li className={`nav-menu-logout ${pathname === '/' ? 'active' : ''}`}>
						<div className='nav-menu-item'>
							<Link className="nav-menu-link" href="/"><span className="icon icon-sign-out" /> Logout</Link>
						</div>
					</li>
				</ul>
			</div>

		</>
	)
}
