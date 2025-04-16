<template><div><h1 id="四、git之版本号" tabindex="-1"><a class="header-anchor" href="#四、git之版本号"><span>四、Git之版本号</span></a></h1>
<h2 id="_4-1、概述" tabindex="-1"><a class="header-anchor" href="#_4-1、概述"><span>4.1、概述</span></a></h2>
<p>每一次提交，Git 都会生成相关的版本号；每个版本号由 40 位 16 进制的数字组成。</p>
<p>这 40 位 16 进制的数字，是根据提交的内容，通过 SHA-1 算法计算出来的。</p>
<p>版本号具体还分为两部分，前 2 位是目录名，后 38 位是文件名。</p>
<h2 id="_4-2、文件操作" tabindex="-1"><a class="header-anchor" href="#_4-2、文件操作"><span>4.2、文件操作</span></a></h2>
<h3 id="_4-2-1、初始化本地库" tabindex="-1"><a class="header-anchor" href="#_4-2-1、初始化本地库"><span>4.2.1、初始化本地库</span></a></h3>
<p><img src="/other/version/git/git-version-01.png" alt=""></p>
<p>如上图所示，刚创建的 Git 本地仓库没有提交信息，也没有版本号。</p>
<h3 id="_4-2-2、新增文件并提交" tabindex="-1"><a class="header-anchor" href="#_4-2-2、新增文件并提交"><span>4.2.2、新增文件并提交</span></a></h3>
<p><img src="/other/version/git/git-version-02.png" alt=""></p>
<p>如上图所示，新增文件并提交后，通过 git reflog 命令可以查到对应的（精简）提交版本号：7896eb8</p>
<h3 id="_4-2-3、根据版本号查找第一次提交的文件" tabindex="-1"><a class="header-anchor" href="#_4-2-3、根据版本号查找第一次提交的文件"><span>4.2.3、根据版本号查找第一次提交的文件</span></a></h3>
<p><img src="/other/version/git/git-version-03.png" alt=""></p>
<p>因为版本号的前 2 位是目录名，后 38 位是文件名；所以可以快速定位出文件所在的位置。</p>
<p><img src="/other/version/git/git-version-04.png" alt=""></p>
<p>如上图所示，直接打开文件时，内容是一堆乱码。</p>
<p><img src="/other/version/git/git-version-05.png" alt=""></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> cat-file <span class="token parameter variable">-p</span> 版本号</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如上图所示，使用命令行指令才能读取版本号对应的文件内容。</p>
<p>可以看到，该文件内容并没有提交的文件的内容信息，但有另一个版本号。</p>
<p><img src="/other/version/git/git-version-06.png" alt=""></p>
<p>如上图所示，读取上文发现的新版本号，还是没有提交的文件的内容信息，但又有新的版本号，而且对应提交的文件的名称。</p>
<p><img src="/other/version/git/git-version-07.png" alt="">
如上图所示，读取上文发现的新版本号，可以看到了提交的文件的内容信息。</p>
<h3 id="_4-2-4、第一次提交的版本号图解" tabindex="-1"><a class="header-anchor" href="#_4-2-4、第一次提交的版本号图解"><span>4.2.4、第一次提交的版本号图解</span></a></h3>
<p><img src="/other/version/git/git-version-08.png" alt=""></p>
<p>如上图所示，提交日志中的版本号所对应的文件，包含的内容是状态信息的版本号；</p>
<p>状态信息的版本号所对应的文件，包含的内容是本次提交版本的全部文件的版本号。</p>
<h3 id="_4-2-5、修改文件并提交" tabindex="-1"><a class="header-anchor" href="#_4-2-5、修改文件并提交"><span>4.2.5、修改文件并提交</span></a></h3>
<p><img src="/other/version/git/git-version-09.png" alt="">
如上图所示，修改文件并提交后，通过 git reflog 命令可以查到对应的（精简）提交版本号：774e05f</p>
<h3 id="_4-2-6、根据版本号查找第二次提交的文件" tabindex="-1"><a class="header-anchor" href="#_4-2-6、根据版本号查找第二次提交的文件"><span>4.2.6、根据版本号查找第二次提交的文件</span></a></h3>
<p><img src="/other/version/git/git-version-10.png" alt=""></p>
<p>如上图所示，根据第二次提交的版本号，可以查出本次提交的状态信息的版本号（tree）和上一次（即第一次）提交的版本号（parent）。</p>
<p><img src="/other/version/git/git-version-11.png" alt=""></p>
<p>如上图所示，根据状态信息的版本号，可以查出本次提交版本的全部文件的版本号。</p>
<blockquote>
<p>注意：修改后的a.txt文件的版本号已经变了，没有修改的b.txt文件的版本号和原来的一样。</p>
</blockquote>
<p><img src="/other/version/git/git-version-12.png" alt=""></p>
<p>如上图所示，修改后的a.txt文件的内容已经从“111”变为“333”了，没有修改的b.txt文件的内容还是原来的“222”。</p>
<h3 id="_4-2-7、第二次提交的版本号图解" tabindex="-1"><a class="header-anchor" href="#_4-2-7、第二次提交的版本号图解"><span>4.2.7、第二次提交的版本号图解</span></a></h3>
<p><img src="/other/version/git/git-version-13.png" alt=""></p>
<p>如上图所示，所谓的修改文件，实质是新增了一个版本号不同但名称相同的文件，然后再新增一个状态版本用来记录新的文件版本号列表。</p>
<p>实际上，原来的文件还存在，这也是为什么能实现版本回退（穿梭）的原因。</p>
<h3 id="_4-2-8、删除文件并提交" tabindex="-1"><a class="header-anchor" href="#_4-2-8、删除文件并提交"><span>4.2.8、删除文件并提交</span></a></h3>
<p><img src="/other/version/git/git-version-14.png" alt="">
<img src="/other/version/git/git-version-15.png" alt=""></p>
<p>如上图所示，删除文件并提交后，通过 git reflog 命令可以查到对应的（精简）提交版本号：a140418</p>
<h3 id="_4-2-9、根据版本号查找第三次提交的文件" tabindex="-1"><a class="header-anchor" href="#_4-2-9、根据版本号查找第三次提交的文件"><span>4.2.9、根据版本号查找第三次提交的文件</span></a></h3>
<p><img src="/other/version/git/git-version-16.png" alt=""></p>
<p>如上图所示，根据第三次提交的版本号，可以查出本次提交的状态信息的版本号（tree）和上一次（即第二次）提交的版本号（parent）。</p>
<p><img src="/other/version/git/git-version-17.png" alt=""></p>
<p>如上图所示，根据状态信息的版本号，可以查出本次提交版本的全部文件的版本号。</p>
<blockquote>
<p>注意：已删除的b.txt文件的版本号已经没了，没删除的a.txt文件的版本号还在。</p>
</blockquote>
<p><img src="/other/version/git/git-version-18.png" alt=""></p>
<h3 id="_4-2-10、第三次提交的版本号图解" tabindex="-1"><a class="header-anchor" href="#_4-2-10、第三次提交的版本号图解"><span>4.2.10、第三次提交的版本号图解</span></a></h3>
<p><img src="/other/version/git/git-version-19.png" alt=""></p>
<p>如上图所示，所谓的删除文件，实质是新增一个状态版本用来记录新的文件版本号列表。</p>
<p>实际上，原来的文件还存在，这也是为什么能实现版本回退（穿梭）的原因。</p>
<h2 id="_4-3、分支操作" tabindex="-1"><a class="header-anchor" href="#_4-3、分支操作"><span>4.3、分支操作</span></a></h2>
<h3 id="_4-3-1、head文件" tabindex="-1"><a class="header-anchor" href="#_4-3-1、head文件"><span>4.3.1、HEAD文件</span></a></h3>
<p><img src="/other/version/git/git-version-20.png" alt=""></p>
<p>HEAD文件中，记录了当前分支版本文件（本例为 master 分支）的路径。</p>
<h3 id="_4-3-2、master分支版本文件" tabindex="-1"><a class="header-anchor" href="#_4-3-2、master分支版本文件"><span>4.3.2、master分支版本文件</span></a></h3>
<p><img src="/other/version/git/git-version-21.png" alt="">
master分支版本文件中，记录了该分支的最新提交版本号。</p>
<h3 id="_4-3-3、master分支版本图解" tabindex="-1"><a class="header-anchor" href="#_4-3-3、master分支版本图解"><span>4.3.3、master分支版本图解</span></a></h3>
<p><img src="/other/version/git/git-version-22.png" alt=""></p>
<h3 id="_4-3-4、创建新分支user" tabindex="-1"><a class="header-anchor" href="#_4-3-4、创建新分支user"><span>4.3.4、创建新分支user</span></a></h3>
<p><img src="/other/version/git/git-version-23.png" alt=""></p>
<p>如上图所示，创建新分支user后，也多了一个分支版本文件user。</p>
<p><img src="/other/version/git/git-version-24.png" alt=""></p>
<p>如上图所示，新创建的user分支版本文件中记录的该分支的最新提交版本号，和master分支版本文件记录的别无二致。</p>
<h3 id="_4-3-5、新创建的user分支版本图解" tabindex="-1"><a class="header-anchor" href="#_4-3-5、新创建的user分支版本图解"><span>4.3.5、新创建的user分支版本图解</span></a></h3>
<p><img src="/other/version/git/git-version-25.png" alt=""></p>
<h3 id="_4-3-6、切换到user新分支" tabindex="-1"><a class="header-anchor" href="#_4-3-6、切换到user新分支"><span>4.3.6、切换到user新分支</span></a></h3>
<p><img src="/other/version/git/git-version-26.png" alt="">
<img src="/other/version/git/git-version-27.png" alt=""></p>
<p>如上图所示，切换到user分支后，HEAD文件中记录的当前分支版本文件的路径是user分支版本文件的路径。</p>
<h3 id="_4-3-7、切换后的user分支版本图解" tabindex="-1"><a class="header-anchor" href="#_4-3-7、切换后的user分支版本图解"><span>4.3.7、切换后的user分支版本图解</span></a></h3>
<p><img src="/other/version/git/git-version-28.png" alt=""></p>
<h3 id="_4-3-8、user分支新增文件并提交" tabindex="-1"><a class="header-anchor" href="#_4-3-8、user分支新增文件并提交"><span>4.3.8、user分支新增文件并提交</span></a></h3>
<p><img src="/other/version/git/git-version-29.png" alt="">
<img src="/other/version/git/git-version-30.png" alt=""></p>
<p>如上图所示，user分支新增文件并提交后，user分支版本文件中记录的该分支的最新提交版本号，和master分支版本文件记录的不一样了。</p>
<h3 id="_4-3-9、新增文件后的user分支版本图解" tabindex="-1"><a class="header-anchor" href="#_4-3-9、新增文件后的user分支版本图解"><span>4.3.9、新增文件后的user分支版本图解</span></a></h3>
<p><img src="/other/version/git/git-version-31.png" alt=""></p>
<h3 id="_4-3-10、切换回master分支" tabindex="-1"><a class="header-anchor" href="#_4-3-10、切换回master分支"><span>4.3.10、切换回master分支</span></a></h3>
<p><img src="/other/version/git/git-version-32.png" alt=""></p>
<p>如上图所示，切换回master分支后，HEAD文件中记录的当前分支版本文件的路径是master分支版本文件的路径。</p>
<p><img src="/other/version/git/git-version-33.png" alt=""></p>
<p>此外，master分支的工作目录中，并没有显示在user分支时新增的c.txt文件，说明在user分支的操作不会影响到master分支。</p>
<h3 id="_4-3-11、切换回的master分支版本图解" tabindex="-1"><a class="header-anchor" href="#_4-3-11、切换回的master分支版本图解"><span>4.3.11、切换回的master分支版本图解</span></a></h3>
<p><img src="/other/version/git/git-version-34.png" alt=""></p>
</div></template>


