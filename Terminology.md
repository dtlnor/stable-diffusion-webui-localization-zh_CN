| 术语               | 直译     | 翻译             | 说明                                                         |
| ------------------ | -------- | ---------------- | ------------------------------------------------------------ |
| stable diffusion   | 稳定扩散 | stable diffusion | 开源的多模态图片生成程序，使用随机噪点扩散训练模型。可以实现文字到图片、图片到图片的不同风格的图片生成。 |
| SD                 |          |                  | stable diffusion 的缩写                                      |
| CFG Scale          | CFG指数  | 提示词相关性     | Classifier Free Guidance Scale 的缩写，基于实际功能翻译。    |
| Denoising strength | 去噪强度 | 重绘幅度         | 这里的“去噪”其实并非常规的去噪（不是那种后处理滤镜），而是同时指“加噪”强度。<br>在SD进行取样的过程中，他要先有噪点然后逐渐从噪点“恢复”成图片。这个“恢复”的过程就叫去噪。而假设我们有1份噪点（100%），step则决定每个step去除多少%的噪点。比如100步就是每步1%。<br>i2i的生成过程就是，假如去噪强度是1.0，那他会加100%的噪点，然后跑100%的取样。而假如去噪强度是0.0，那他就不加噪点，也就是不做取样，直接编码进潜在空间然后再直接编码回来。所以很自然0.5的去噪就只会跑一半的step，因为他只加了50%的噪点。<br>其实在sd官方，这个参数不叫Denoising strength，而是直接叫strength（噪声/非噪声的强度），我觉得以功能取代原有名字也是一种解决办法。 |
| inpaint            | 绘画     | 局部重绘         | 在SD里这个标签对应的功能是绘制蒙版，并对蒙版区域进行局部重绘。 |
| outpaint           | 向外绘制 | 向外绘制         |                                                              |
| latent space       |          | 潜在空间         |                                                              |
| latent noise       |          | 潜空间噪声       |                                                              |
| latent zeroes      |          | 潜空间数值零     |                                                              |
| image grids        |          | 宫格图           |                                                              |
| Hypernetwork       |          | 超网络           |                                                              |
| Slerp              |          | 球面线性插值     |                                                              |
| Aesthetic          |          | 美术风格         |                                                              |
| tokenizer          |          | 词元             |                                                              |
| Textual Inversion  |          |                  |                                                              |
| t2i                |          | 文生图           | txt to img 的缩写                                            |
| i2i                |          | 图生图           | img to img 的缩写                                            |
| Tag                |          | 提示词           | 某些教程会使用 Tag 作为 Prompt 的翻译                        |
| NAI                |          |                  | Novel AI ，一般特指本地版                                    |
| webUI              |          |                  | [stable diffusion 网页用户界面](https://github.com/AUTOMATIC1111/stable-diffusion-webui)，由AUTOMATIC1111开发 |
| embedding          |          |                  |                                                              |
| ENSD               |          |                  |                                                              |
| CLIP               |          |                  | CLIP是一个非常先进的神经网络，它把你的自然语言提示语转化为词元供stable diffusion使用 |

