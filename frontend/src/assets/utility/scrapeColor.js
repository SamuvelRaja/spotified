export default async function getImagePrimaryColor(imageUrl) {
            // Load the image
            const img = new Image();
            img.crossOrigin = "Anonymous"; // This is important if the image is served from a different origin
            img.src = imageUrl;

            return new Promise((resolve, reject) => {
                img.onload = () => {
                    // Draw the image onto a canvas
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    context.drawImage(img, 0, 0);

                    // Get the image data
                    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

                    // Analyze the image data to find the primary color
                    const colorCount = {};
                    let primaryColor = '';
                    let maxCount = 0;

                    for (let i = 0; i < imageData.length; i += 4) {
                        const r = imageData[i];
                        const g = imageData[i + 1];
                        const b = imageData[i + 2];
                        const color = `rgb(${r}, ${g}, ${b})`;

                        if (colorCount[color]) {
                            colorCount[color]++;
                        } else {
                            colorCount[color] = 1;
                        }

                        if (colorCount[color] > maxCount) {
                            maxCount = colorCount[color];
                            primaryColor = color;
                        }
                    }

                    resolve(primaryColor);
                };

                img.onerror = reject;
            });
        }
