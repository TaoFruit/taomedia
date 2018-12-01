			jQuery(function($){
				
				$.supersized({
				
					// Functionality
					slideshow               :   1,			// Slideshow on/off
					autoplay				:	1,			// Slideshow starts playing automatically
					start_slide             :   1,			// Start slide (0 is random)
					stop_loop				:	0,			// Pauses slideshow on last slide
					random					: 	0,			// Randomize slide order (Ignores start slide)
					slide_interval          :   12000,		// Length between transitions
					transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	1000,		// Speed of transition
					new_window				:	1,			// Image links open in new window/tab
					pause_hover             :   0,			// Pause slideshow on hover
					keyboard_nav            :   1,			// Keyboard navigation on/off
					performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
					image_protect			:	1,			// Disables image dragging and right click with Javascript
															   
					// Size & Position						   
					min_width		        :   0,			// Min width allowed (in pixels)
					min_height		        :   0,			// Min height allowed (in pixels)
					vertical_center         :   1,			// Vertically center background
					horizontal_center       :   1,			// Horizontally center background
					fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
					fit_portrait         	:   1,			// Portrait images will not exceed browser height
					fit_landscape			:   0,			// Landscape images will not exceed browser width
															   
					// Components							
					slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					thumb_links				:	0,			// Individual thumb links for each slide
					thumbnail_navigation    :   0,			// Thumbnail navigation
					slides 					:  	[			// Slideshow Images
														{image : './images/slider/image1.jpg', title : 'Creative Agency <div class="slidedescription">Master storytellers and influencers, we are the solution brands seek when they want to make a difference in the world. We consult and create for top brands in digital branding, event strategies, and social engagement. Our diverse skills allow us to oversee entire marketing departments in-house or as a partnered agency for hire.</div>', thumb : '', url : 'http://themes.tvda.eu/'},
														{image : './images/slider/image2.jpg', title : 'Brand Identity <div class="slidedescription">We blend all types of media together for an immersive experience across web, film, audio, print, billboard, trade booth, and any other type of format our clients can think up. We love to bring art to the business space whether we are designing for enterprises or startups.</div>', thumb : '', url : 'http://themes.tvda.eu/'},
														{image : './images/slider/image3.jpg', title : 'Media Production <div class="slidedescription">We blend all types of media together for an immersive experience across web, film, audio, print, billboard, trade booth, and any other type of format our clients can think up. We love to bring art to the business space whether we are designing for enterprises or startups.</div>', thumb : '', url : 'http://themes.tvda.eu/'},
														{image : './images/slider/image4.jpg', title : 'Growth Marketing <div class="slidedescription">We are partnered with media influencers around the world and engage in exciting events, and interactive strategies to expand companies in multiple markets. With our unique approach of combining the tactile world with the digital, we are able to influence many demographics on an international scale.</div>', thumb : '', url : 'http://themes.tvda.eu/'}  
												],
												
					// Theme Options			   
					progress_bar			:	0,			// Timer for each slide							
					mouse_scrub				:	0
					
				});
		    });
