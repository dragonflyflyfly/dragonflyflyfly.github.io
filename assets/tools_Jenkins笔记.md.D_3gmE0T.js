import{_ as s,c as n,o as e,a3 as a}from"./chunks/framework.C6cJSjK0.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"tools/Jenkins笔记.md","filePath":"tools/Jenkins笔记.md"}'),t={name:"tools/Jenkins笔记.md"},i=a(`<h2 id="安装jenkins" tabindex="-1">安装Jenkins <a class="header-anchor" href="#安装jenkins" aria-label="Permalink to &quot;安装Jenkins&quot;">​</a></h2><p><strong>1.下载</strong> 从<a href="https://jenkins.io/" target="_blank" rel="noreferrer">Jenkins官网</a>下载安装文件。官网提供了war包、可执行安装包、Docker等形式的Jenkins安装文件。这里我使用的是可执行安装包的形式。</p><p><strong>2.运行</strong> 安装完成后，使用以下命令启动jenkins：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">java </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jar jenkins.war</span></span></code></pre></div><p>第一次启动Jenkins时，出于安全考虑，Jenkins会自动生成一个随机的口令，该口令保存在如下文件中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>C:\\Users\\lp\\.jenkins\\secrets\\initialAdminPassword</span></span></code></pre></div><p>打开该文件，复制口令，然后打开浏览器访问<a href="http://localhost:8080/" target="_blank" rel="noreferrer">http://localhost:8080/</a> ,粘贴上面的口令，进入安装界面。 接下来，如果执行默认的安装，Jenkins就自动配置好了Maven、git等常用插件。 最后，创建一个admin用户，完成安装。</p><p><strong>3.更改默认工作空间</strong> Jenkins默认工作空间在C:\\Users\\lp.jenkins，可以指定到其它目录。 步骤： ①配置环境变量JENKINS_HOME 注意：这里指定的是工作空间的位置，而不是Jenkins安装目录。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>JENKINS_HOME  =  D:\\Tools\\.jenkins</span></span></code></pre></div><p>②修改jenkins安装目录下的jenkins.xml文件的配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  &lt;env name=&quot;JENKINS_HOME&quot; value=&quot;%BASE%&quot;/&gt;</span></span>
<span class="line"><span>  &lt;!--改为--&gt;</span></span>
<span class="line"><span>  &lt;env name=&quot;JENKINS_HOME&quot; value=&quot;%JENKINS_HOME%&quot;/&gt;</span></span></code></pre></div><p>修改完成后，将C:\\Users\\lp.jenkins目录移到JENKINS_HOME指定的位置下，然后重启jenkins即可。</p>`,12),p=[i];function o(l,r,c,d,h,k){return e(),n("div",null,p)}const _=s(t,[["render",o]]);export{u as __pageData,_ as default};
