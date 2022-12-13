//This is a video about Totoro, have fun! :)  
  
const f = (()=>a.fft[0])

s0.initVideo("https://media4.giphy.com/media/13cqvMx0yH3eko/giphy.mp4")
s1.initVideo("https://media4.giphy.com/media/j9jShLBEYbcHj0DIKA/giphy.mp4")
s2.initVideo("https://media4.giphy.com/media/eHQ5BsgBIBIGI/giphy.mp4")
s3.initVideo("https://media2.giphy.com/media/unzR48isp6cCY/giphy.mp4")
src(s0).blend(s1,f).add(s2,0.1).add(src(s3).pixelate(150, 150),1).out(o0)
render(o0)
