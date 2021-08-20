<template>
  <div>
    <Header h1title="آقای رهگذر" h2dec="آقای رهگذر یک ابزار برای جایگزینی متن لورم ایپسوم در ایران است." />
    <div class="row">
      <div class="col-md-2 ms-5 p-5 rounded d-md-block d-none bg-light">
        آقای رهگذر
      </div>
      <div class="col-md-8 me-5 p-4 rounded col-12 bg-light">
        <div class="row ax-selection">
          <div class="col-2">
            <div>زبان:</div>
            <div class="ax-select-arr">
              <select name="ax-language" id="ax-language">
                <option value="فارسی">
                  فارسی
                </option>
                <option value="English">
                  English
                </option>
                <option value="Deutsch">
                  Deutsch
                </option>
                <option value="گیلکی">
                  گیلکی
                </option>
                <option value="آذری">
                  آذری
                </option>
                <option value="کوردی">
                  کوردی
                </option>
              </select>
            </div>
          </div>
          <div class="col-2" >
            <div>نوع متن:</div>
            <div class="ax-select-arr">
            <select name="ax-texttype" id="ax-texttype">
              <option value="پاراگراف">
                پاراگراف
              </option>
              <option value="جمله">
                جمله
              </option>
              <option value="کلمه">
                کلمه
              </option>
            </select>
            </div>
          </div>
          <div class="col-2">
            <div>تعداد:</div>
            <div class="ax-select-arr">
            <select name="ax-texttype" id="ax-texttype">
              <option value="1">
                1
              </option>
              <option value="2">
                2
              </option>
              <option value="3">
                3
              </option>
              <option value="4">
                4
              </option>
              <option value="5">
                5
              </option>
              <option value="20">
                20
              </option>
              <option value="50">
                50
              </option>
              <option value="سفارشی">
                سفارشی
              </option>
            </select>
            </div>
          </div>
        </div>

        <hr>
        <div contenteditable="true" class="ax-finaltext-rah px-4 py-2 m-2">
          {{message}}
        </div>
        

        <div class="row d-flex justify-content-center mt-4">
          <button class="col-2 mx-2 btn btn-primary">دانلود متن</button>
          <button class="col-2 mx-2 btn btn-outline-primary">کپی متن</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    head: {
      title: 'آقای رهگذر',
    },
    asyncData() {
      return {
        message: `
        آقای رهگذر نویسند‌ه‌ای خیالی است که متنی موقت برای طراحان گرافیک و وبسایت می‌نویسد. این متن یک متن ساختگی است، که در طرح های اولیه گرافیکی و پیاده سازی اولیه وب سایت ها استفاده می‌شود. آقای رهگذر در مورد همه چیز اطلاعات دارد از صنعت چاپ سنتی و صنعتی گرفته تا تکنولوژی‌های روز دنیا که هرکدام کاربردهای مختلفی دارند که هدف اصلی هریک بهبود شرایط زندگی شماست. آقای رهگذر کتابهای زیادی درباره‌ی نرم افزارهای مختلف خوانده است و می‌تواند راهنمای خوبی برای طراحان فارسی زبان باشد. طراحان می‌توانند امید داشته باشند که با پیشرفت دنیای تکنولوژی شرایط و مشکلات سخت در حوزه‌ی کاریشان به پایان برسد.
        `
      }
    }
  }

</script>
