export default function getImageUrl(imageName) {
	const isMobile = window.innerWidth <= 768; // TODO: insert breakpoint for mobile from figma
	const basePath = isMobile ? "mobile" : "desktop";
  
	if (imageName) {
		return new URL(
			`../assets/images/${basePath}/${imageName}`,
			import.meta.url
		);
	} else {
		return false;
	}
}
