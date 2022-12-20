//Try using this: voronoi(10,100,2).blend(voronoi(10, 100, 0.25))
s0.initVideo("https://media4.giphy.com/media/Gd55pKEFv7eG4/giphy.mp4")
src(s0)

function voronoiShapes(sc, sp, bl){
  return voronoi(sc, sp, bl)
}
voronoiShapes(10,10,0.125)


  .out(o0)
render(o0)
