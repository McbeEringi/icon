#!/usr/bin/env -S bun --install=force
import{renderAsync}from'@resvg/resvg-js';

const
svg=await Bun.file('icon.svg').text(),
img=(await renderAsync(svg));

await Bun.write(
	'aspng.png',
	img.asPng()
)
