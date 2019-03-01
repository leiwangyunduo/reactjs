<template lang="html">
  <div class="">
    <div class="header container clearfix grWidth">
        <!-- <a href="index.html" class="logo fl"  aos="fade-right" aos-delay=""><img src="./images/0logo.png" title="" alt="有伴学车"></a> -->
        <div class="nav fl"  aos="fade-left" aos-delay="100">
    			   <div class="navMain">
        				<router-link class="fl" to="/index">
                  <span class="tabItem">网站首页</span>
                </router-link>
                <router-link class="fl" to="/student">
                    <span class="tabItem">学员保障</span>
                </router-link>
                <router-link class="fl" to="/local">
                    <span class="tabItem">训练场地</span>
                </router-link>
                <router-link class="fl" to="/notice">
                    <span class="tabItem">学员保障</span>
                </router-link>
                <router-link class="fl" to="/about">
                    <span class="tabItem">了解我们</span>
                </router-link>

              </div>
          </div>
    	    <div class="headRight fr" >
    	        <a href="javascript:;"><span class="num">400-888-1288</span></a>
    	    </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="css">


    /*  导航  */
    .header{height: 75px;padding: 15px 0}
      .header .logo{display: inline-block;width: 185px;height: 45px;}
      .nav{height:45px;line-height:45px; font-size:18px; position:relative;z-index:10;}
    .nav .fl{display: inline-block;}
      .nav  .tabItem{height:45px;line-height:45px;font-weight: normal;display: block;margin-left:58px;color: #333333;font-size: 15px}
      .nav .fl.router-link-active .tabItem{color: #fc7733;}
      .nav .fl .tabItem.router-link-active{color: #fc7733;}
    .nav .navSub{position:absolute;border-radius:0 0 5px 5px;background:rgba(255,255,255,0.9);top:80px;box-shadow:0 2px 3px #454545;width:650px;left:0px;display:none;padding:20px 25px;overflow:hidden;}
      .headRight{line-height: 45px;position: relative;top:8px;}
      .headRight .num{color: #fc661a;font-size: 20px;font-weight: bold;vertical-align: middle;position: relative;top:-5px;left: 5px;font-family: Arial;font-style: italic ; }

</style>
