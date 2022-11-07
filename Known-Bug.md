### 以下内容无法被翻译，Bug

| 原文 | 翻译 |
| --- | --- |
| Add a random artist to the prompt. | 随机添加一个艺术家到提示词中 |
| Read generation parameters from prompt or last generation if prompt is empty into user interface. | 从提示词中读取生成参数，如果提示词为空，则读取上一次的生成参数到用户界面 |
| Save style | 储存为模版风格 |
| Apply selected styles to current prompt | 将所选模板风格，应用于当前提示词 |
| Set seed to -1, which will cause a new random number to be used every time | 将随机种子设置为-1，则每次都会使用一个新的随机数 |
| Reuse seed from last generation, mostly useful if it was randomed | 重用上一次使用的随机种子，如果想要固定结果就会很有用 |
| Open images output directory | 打开图像输出目录 |
| Upscaler 1 | 放大算法 1 |
| Upscaler 2 | 放大算法 2 |
| Separate prompts into parts using vertical pipe character (\|) and the script will create a picture for every combination of them (except for the first part, which will be present in all combinations) | 用竖线分隔符(\|)将提示词分成若干部分，脚本将为它们的每一个组合创建一幅图片（除了被分割的第一部分，所有的组合都会包含这部分） |
| Select which Real-ESRGAN models to show in the web UI. (Requires restart) | 选择哪些 Real-ESRGAN 模型显示在网页用户界面。(需要重新启动) |
| Allowed categories for random artists selection when using the Roll button | 使用抽选艺术家按钮时将会随机的艺术家类别 |
| Face restoration model | 面部修复模型 |
| Install | 安装 |
| Installing... | 安装中... |
| Installed | 已安装 |

### 对无法翻译内容附近的文本，尝试补充翻译(beta)

| 原文 | 翻译 |
| --- | --- |
| Style to apply; styles have components for both positive and negative prompts and apply to both | 要使用的模版风格； 模版风格包含正向和反向提示词，并应用于两者\n🎨    随机添加一个艺术家到提示词中\n↙️     从提示词中读取生成参数，如果提示词为空，则读取上一次的生成参数到用户界面\n💾    将当前的提示词保存为模版风格(保存在styles.csv)\n📋    将所选模板风格，应用于当前提示词\n如果你在文本中添加{prompt}标记，并保存为模版风格\n那么将来你使用该模版风格时，你现有的提示词会替换模版风格中的{prompt} |
| A value that determines the output of random number generator - if you create an image with same parameters and seed as another image, you'll get the same result | 一个固定随机数生成器输出的值 - 以相同参数和随机种子生成的图像会得到相同的结果\n🎲    将随机种子设置为-1，则每次都会使用一个新的随机数\n♻️    重用上一次使用的随机种子，如果想要固定输出结果就会很有用 |
