'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SidebarDashboard({ handleSidebarHideText, showNavText }) {
	const pathname = usePathname()
	return (
		<>
			<div className={`sidebar-menu-dashboard ${showNavText ? "visible-nav-text" : ""}`}>
				<div className='fixed-sidebar'>
					<ul className="box-menu-dashboard">
						<li className={`nav-menu-item ${pathname === '/dashboard' ? 'active' : ''}`}>
							<Link className="nav-menu-link" href="/dashboard"><i className="icon icon-dashboard" /> <span className='text'>Home</span></Link>
						</li>
						<li className={`nav-menu-item ${pathname === '/user-profile' ? 'active' : ''}`}>
							<Link className="nav-menu-link" href="/user-profile"><i className="icon icon-account-line-3" /><span className='text'>Profile</span> </Link>
						</li>
						<li className={`nav-menu-item ${pathname === '/profile-setting' ? 'active' : ''}`}>
							<Link className="nav-menu-link" href="/profile-setting"><i className="icon icon-settings" /> <span className='text'>Setting</span> </Link>
						</li>
						<li className={`nav-menu-item ${pathname === '/download' ? 'active' : ''}`}>
							<Link className="nav-menu-link" href="/download"><i className="icon icon-download" /><span className='text'>Downloads</span> </Link>
						</li>
						<li className={`nav-menu-item ${pathname === '/manage-items' || pathname ==='/manage-items/edit-item'  ? 'active' : ''} `}>
							<Link className="nav-menu-link" href="/manage-items"><i className="icon icon-manage" /><span className='text'>Manage items</span> </Link>
						</li>
						<li className={`nav-menu-item ${pathname === '/upload-items' ? 'active' : ''}`}>
							<Link className="nav-menu-link" href="/upload-items"><i className="icon icon-upload1" /><span className='text'>Upload item</span> </Link>
						</li>
						<li className={`nav-menu-item ${pathname === '/earnings' ? 'active' : ''}`}>
							<Link className="nav-menu-link" href="/earnings"><i className="icon icon-diamond" /><span className='text'>Earnings</span> </Link>
						</li>
						<li className={`nav-menu-item ${pathname === '/statements' ? 'active' : ''}`}>
							<Link className="nav-menu-link" href="/statements"><i className="icon icon-browser-2" /><span className='text'>Statements</span> </Link>
						</li>
						<li className={`nav-menu-item ${pathname === '/payouts' ? 'active' : ''}`}>
							<Link className="nav-menu-link" href="/payouts"><i className="icon icon-calculator" /><span className='text'>Payouts</span> </Link>
						</li>
						<li className={`nav-menu-item ${pathname === '/become-author-dashboard' ? 'active' : ''}`}>
							<Link className="nav-menu-link" href="/become-author-dashboard"><i className="icon icon-briefcase" /><span className='text'>Become an author</span> </Link>
						</li>
						<li className={`nav-menu-item ${pathname === '/verify-1' ? 'active' : ''}`}>
							<Link className="nav-menu-link" href="/verify-1"><i className="icon icon-comment-user" /><span className='text'>Verify account</span> </Link>
						</li>
						<li className={`nav-menu-logout ${pathname === '/' ? 'active' : ''}`}>
							<div className='nav-menu-item'>
								<Link className="nav-menu-link" href="/"><i className="icon icon-sign-out" /><span className='text'>Logout</span> </Link>
							</div>
						</li>
					</ul>
					<div className='btn-hide-text' onClick={handleSidebarHideText}>
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g opacity="0.5" clipPath="url(#clip0_4276_23936)">
						<path d="M8.87227 18.0001C8.77356 18.0007 8.67572 17.9818 8.58434 17.9445C8.49296 17.9071 8.40985 17.8521 8.33977 17.7826C8.26947 17.7129 8.21368 17.63 8.1756 17.5386C8.13752 17.4472 8.11792 17.3491 8.11792 17.2501C8.11792 17.1511 8.13752 17.0531 8.1756 16.9617C8.21368 16.8703 8.26947 16.7874 8.33977 16.7176L14.4673 10.5901C14.8886 10.1683 15.1253 9.59639 15.1253 9.00014C15.1253 8.40389 14.8886 7.83202 14.4673 7.41014L8.33977 1.28264C8.26984 1.21271 8.21437 1.12969 8.17652 1.03833C8.13868 0.946959 8.1192 0.849033 8.1192 0.750139C8.1192 0.550413 8.19854 0.358867 8.33977 0.217639C8.481 0.0764112 8.67254 -0.00292969 8.87227 -0.00292969C9.07199 -0.00292969 9.26354 0.0764112 9.40477 0.217639L15.5323 6.34514C15.8815 6.69348 16.1586 7.1073 16.3476 7.56289C16.5367 8.01848 16.634 8.50688 16.634 9.00014C16.634 9.49339 16.5367 9.9818 16.3476 10.4374C16.1586 10.893 15.8815 11.3068 15.5323 11.6551L9.40477 17.7826C9.33469 17.8521 9.25158 17.9071 9.1602 17.9445C9.06882 17.9818 8.97097 18.0007 8.87227 18.0001Z" fill="#0E0D0F"/>
						<path d="M1.37251 18.0001C1.27381 18.0007 1.17596 17.9818 1.08458 17.9445C0.993205 17.9071 0.910093 17.8521 0.840013 17.7826C0.769716 17.7129 0.713921 17.63 0.675844 17.5386C0.637768 17.4472 0.618164 17.3491 0.618164 17.2501C0.618164 17.1511 0.637768 17.0531 0.675844 16.9617C0.713921 16.8703 0.769716 16.7874 0.840013 16.7176L8.03251 9.53264C8.10281 9.46292 8.15861 9.37997 8.19668 9.28857C8.23476 9.19718 8.25436 9.09915 8.25436 9.00014C8.25436 8.90113 8.23476 8.8031 8.19668 8.71171C8.15861 8.62031 8.10281 8.53736 8.03251 8.46764L0.840013 1.28264C0.698785 1.14141 0.619444 0.949865 0.619444 0.750139C0.619444 0.550413 0.698785 0.358867 0.840013 0.217639C0.981241 0.0764112 1.17279 -0.00292969 1.37251 -0.00292969C1.57224 -0.00292969 1.76379 0.0764112 1.90501 0.217639L9.09001 7.41014C9.51136 7.83202 9.74803 8.40389 9.74803 9.00014C9.74803 9.59639 9.51136 10.1683 9.09001 10.5901L1.90501 17.7826C1.83493 17.8521 1.75182 17.9071 1.66044 17.9445C1.56906 17.9818 1.47122 18.0007 1.37251 18.0001Z" fill="#0E0D0F"/>
						</g>
						<defs>
						<clipPath id="clip0_4276_23936">
						<rect width="18" height="18" fill="white"/>
						</clipPath>
						</defs>
						</svg>
					</div>
				</div>
			</div>

		</>
	)
}
