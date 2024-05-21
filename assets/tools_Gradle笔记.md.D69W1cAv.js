import{_ as a,c as s,o as n,a3 as e}from"./chunks/framework.C6jertZK.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"tools/Gradle笔记.md","filePath":"tools/Gradle笔记.md"}'),p={name:"tools/Gradle笔记.md"},l=e(`<h2 id="一、安装gradle" tabindex="-1">一、安装Gradle <a class="header-anchor" href="#一、安装gradle" aria-label="Permalink to &quot;一、安装Gradle&quot;">​</a></h2><p><strong>1.下载gradle</strong> 下载gradle有两种方式 ①使用包管理器安装 在linux下，可以按照<a href="https://docs.gradle.org/current/userguide/installation.html" target="_blank" rel="noreferrer">官网安装步骤</a>使用包管理器安装gradle。<a href="http://spring.io/guides/gs/gradle/#initial" target="_blank" rel="noreferrer">Spring官网</a>推荐使用<a href="https://sdkman.io/" target="_blank" rel="noreferrer">SDKMAN</a>(Linux)和<a href="https://brew.sh/" target="_blank" rel="noreferrer">Homebrew</a>包管理器(macOS) ②直接下载 也可以直接从<a href="https://gradle.org/releases/" target="_blank" rel="noreferrer">官网下载页</a>手动下载，<a href="http://services.gradle.org/distributions/" target="_blank" rel="noreferrer">这里</a>也提供了gradle的所有版本。 <strong>2.设置环境变量</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GRADLE_HOME=E:\\Tools\\gradle-3.1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PATH添加%GRADLE_HOME%\\bin;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#修改默认的仓库位置</span></span>
<span class="line"><span>GRADLE_USER_HOME=D:\\Tools\\.gradle;</span></span></code></pre></div><p>Gradle默认的仓库位置也是在C盘下，但不能像maven一样直接通过配置文件改变位置。但是可以通过设置GRADLE_USER_HOME这个环境变量来改变位置(如果配置之后仍不生效，可以注销一下计算机，亲测有效)。</p><p><strong>3.验证安装</strong> 使用以下命令验证gradle是否安装成功</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gradle</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><p><strong>3.使用aliyun仓库</strong> ①全局配置 在 USER_HOME/.gradle/下面创建新 init.gradle文件，输入下面的内容并保存。 init.gradle文件其实是Gradle的初始化脚本(Initialization Scripts)，也是运行时的全局配置。更详细的介绍请参阅官方文档<a href="http://gradle.org/docs/current/userguide/init_scripts.html" target="_blank" rel="noreferrer">Initialization Scripts</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>allprojects {</span></span>
<span class="line"><span>    repositories {</span></span>
<span class="line"><span>        def REPOSITORY_URL = &#39;http://maven.aliyun.com/nexus/content/groups/public/&#39;</span></span>
<span class="line"><span>        all { ArtifactRepository repo -&gt;</span></span>
<span class="line"><span>            if (repo instanceof MavenArtifactRepository &amp;&amp; repo.url != null) {</span></span>
<span class="line"><span>                def url = repo.url.toString()</span></span>
<span class="line"><span>                if (url.startsWith(&#39;https://repo1.maven.org/maven2&#39;) || url.startsWith(&#39;https://jcenter.bintray.com/&#39;)) {</span></span>
<span class="line"><span>                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $REPOSITORY_URL.&quot;</span></span>
<span class="line"><span>                    remove repo</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        maven {</span></span>
<span class="line"><span>            url REPOSITORY_URL</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>②单个项目配置 在项目下的build.gradle文件中进行配置。 配置maven本地仓库，阿里云仓库，maven中央仓库(这个是spring源码的配置，所以有spring仓库)</p><pre><code>buildscript {
	repositories {
		//Maven本地资源库
		mavenLocal()
		//阿里云仓库
		maven {url &quot;http://maven.aliyun.com/nexus/content/groups/public/&quot; }
		//spring仓库(spring源码自带)
		//maven {url &quot;https://repo.spring.io/plugins-release&quot; }		
		//Maven中央仓库
		//mavenCentral()
	}
</code></pre><p>​ dependencies { classpath(&quot;org.springframework.build.gradle:propdeps-plugin:0.0.7&quot;) classpath(&quot;org.springframework.build.gradle:docbook-reference-plugin:0.2.8&quot;) } } <strong>4.安装Eclipse插件BuildShip</strong> BuildShip是Gradle官方推荐的eclipse插件，不同版本的eclipse对应的版本也不一样，请看<a href="http://projects.eclipse.org/projects/tools.buildship" target="_blank" rel="noreferrer">官网</a>和<a href="https://github.com/eclipse/buildship" target="_blank" rel="noreferrer">github</a></p><p><strong>5.常用命令</strong> 可参考<a href="http://www.cnblogs.com/yjmyzz/p/gradle-getting-start.html" target="_blank" rel="noreferrer">博客</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gradle compile test</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#编译(含单元测试)</span></span>
<span class="line"><span>gradle build</span></span>
<span class="line"><span>#编译(跳过单元测试)</span></span>
<span class="line"><span>gradle build -x test</span></span>
<span class="line"><span>#单元测试</span></span>
<span class="line"><span>gradle test</span></span>
<span class="line"><span>#安装到本地maven仓库</span></span>
<span class="line"><span>gradle install</span></span>
<span class="line"><span>#清空所有编译、打包生成的文件，会清空build目录</span></span>
<span class="line"><span>gradle clean</span></span>
<span class="line"><span>#运行项目</span></span>
<span class="line"><span>gradle run</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#源码打jar包，生成的jar在build/libs目录下</span></span>
<span class="line"><span>gradle sourcesJar</span></span>
<span class="line"><span>=========================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#生成eclipse结构</span></span>
<span class="line"><span>gradle eclipse -x :eclipse    </span></span>
<span class="line"><span>#生成pom.xml文件，在build根目录下。把它复制项目根目录下，即可将gradle方便转成maven项目</span></span>
<span class="line"><span>gradle createPom</span></span></code></pre></div><h2 id="二、使用gradlew" tabindex="-1">二、使用gradlew <a class="header-anchor" href="#二、使用gradlew" aria-label="Permalink to &quot;二、使用gradlew&quot;">​</a></h2><p>对于所有的Gradle项目来说，都推荐使用Gradle Wrapper，甚至应该将其当做创建代码库之后的第一件事来做。使用Gradle Wrapper有以下好处：</p><ul><li>不用安装gradle也能运行gradle</li><li>所有人使用相同的gradle版本</li></ul><p>在build.gradle中加入以下配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>task wrapper(type: Wrapper) {</span></span>
<span class="line"><span>    gradleVersion = &#39;4.6&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后在命令行运行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gradle wrapper</span></span></code></pre></div><p>此时会生成以下三个文件（夹）：gradlew、gradlew.bat和gradle目录。</p><p>这里的gradlew和gradlew.bat其实只是脚本文件（前者用于Unix/Linux/Mac，后者用于Windows），在使用gradle命令的地方替换为gradlew或gradlew.bat，他们将自动下载指定的gradle版本，然后用该版本进行项目构建。如上文所示，本文中我们配置gradle版本为4.6。</p><p>请注意，这三个文件（夹）都需要提交到代码库中。当项目其他人拿到代码之后，由于gradlew和gradlew.bat文件均在源代码中，他们本地即便没有gradle，依然可以通过./gradlew build命令进行项目构建.</p><p>如果你的项目有持续集成（CI）服务器（你也应该有），那么你的CI机器也没有必要安装Gradle了。另外，此时所有人都是使用的相同版本的gradle，进而避免了由于版本不同所带来的问题。</p><h2 id="三、创建gradle项目" tabindex="-1">三、创建gradle项目 <a class="header-anchor" href="#三、创建gradle项目" aria-label="Permalink to &quot;三、创建gradle项目&quot;">​</a></h2><p>可参考：<a href="https://www.cnblogs.com/davenkin/p/gradle-spring-boot.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/davenkin/p/gradle-spring-boot.html</a></p><h2 id="四、使用gradlew创建项目" tabindex="-1">四、使用gradlew创建项目 <a class="header-anchor" href="#四、使用gradlew创建项目" aria-label="Permalink to &quot;四、使用gradlew创建项目&quot;">​</a></h2><p>spring官网也有使用gradlew创建项目的文档：<a href="http://spring.io/guides/gs/gradle/#_build_your_project_with_gradle_wrapper" target="_blank" rel="noreferrer">Build your project with Gradle Wrapper</a></p>`,28),r=[l];function t(i,o,d,c,g,h){return n(),s("div",null,r)}const m=a(p,[["render",t]]);export{b as __pageData,m as default};
