# Binary-Image-Encoder (clear string)
Encode image to binary to get txt file with clear easy to paste string
Use binary images to place in jsx file instead of linking extra jpg/png files. 

It removes from binary string residuals:
```
(new String(...))
```
So you get clear binary: 
```
"\u0089PNG\r\n\x1A\n\..."
```
