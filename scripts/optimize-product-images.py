"""Convert product JPGs (900x600) to WebP for the /mining photo grid.
Usage: python3 scripts/optimize-product-images.py <src_dir_with_jpgs> [dest_dir]
Only the WebP output is committed/shipped."""
import sys, pathlib
from PIL import Image
src = pathlib.Path(sys.argv[1])
dest = pathlib.Path(sys.argv[2] if len(sys.argv) > 2 else "public/mining/products")
dest.mkdir(parents=True, exist_ok=True)
for f in sorted(src.glob("*.jpg")):
    im = Image.open(f).convert("RGB")
    im.thumbnail((900, 600))
    out = dest / (f.stem + ".webp")
    im.save(out, "WEBP", quality=78, method=6)
    print(out, out.stat().st_size // 1024, "KB")
