#!/usr/bin/env -S bun --install=force
import{renderAsync}from'@resvg/resvg-js';

const
svg=await Bun.file('icon.svg').text(),
img=(await renderAsync(svg,{fitTo:{mode:'zoom',value:2}}));

await Bun.write(
	'aspng.png',
	img.asPng()
)
