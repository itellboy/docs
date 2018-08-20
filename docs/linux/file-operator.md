# 命令格式
> 命令 [选项] [参数]  

# ls [选项] [文件或者目录名]

```bash
ls 
  -a # 显示所有文件
  -l # 显示详细信息
	-d # 查看目录属性
	-h # 人性化显示文件大小
	-i # 显示inode
```

`-rwxrwxrwx l user group 1207 1 27 00:50 Download`  

> -文件 d目录 l软链接文件  
> u所有者 g所属组 o其他人  
> r读 w写 x执行。

# mkdir -p [目录名]

> make derectories  

`mkdir -p dir/document # 递归创建` 

# cd [目录]

```bash
cd ～  # 进入当前用户的家目录
cd - # 进入上次目录
cd .. # 进入上级目录
cd . # 进入当前目录
```

#rmdir [目录名]

> 删除空目录 remove empty directory

#rm -fr [文件或目录]

```bash
rm  -r //删除目录
-f //强势 force
```

# cp [选项] [原文件或者目录] [目标目录]

> copy  

```bash
cp
  -r # 复制目录
	-p # 连带文件属性复制
	-d # 若原文件为链接文件，则复制链接属性
	-a # 相当于-pdr
```

# mv [原文件或目录] [目标目录]

> move  
> 可用于改名，如果原文件和目标文件在同一个目录

# ln -s [原文件] [目标文件]

> link 生成链接文件  

```bash
ln -s //生成软链接
```

## 硬链接特征

1. 拥有相同的i节点和存储 block 块，可以看作是同一个文件
2. 可以通过 i 节点识别
3. 不能夸分区
4. 不能针对目录使用  

## 软链接特征

1. 类似于Windows快捷方式
2. 软链接拥有自己的I节点和block块，但是数据块中只保存原文件的文件名和I节点号，并没有实际的文件数据
3. `lxwrxwrxwr`为软链接的权限
4. 修改任意文件，另一个都改变
5. 删除原文件，软链接不能使用

# pwd

> 显示当前目录 print working directory  
