const PX_TO_REM = {
	500: 31.25,
	1100: 68.75,
	1500: 93.75
};

export const TABLET_MEDIA = `@media (min-width:${PX_TO_REM[500]}rem)`;
export const LAPTOP_MEDIA = `@media (min-width: ${PX_TO_REM[1100]}rem)`;
export const DESKTOP_MEDIA = `@media (min-width: ${PX_TO_REM[1500]}rem)`;
