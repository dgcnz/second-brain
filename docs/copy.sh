rg -I -N '!\[\[(.+\.png)\]\]' -r '$1'  | uniq
