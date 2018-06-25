<template>
  <div class="content">
    <h1>Бронирования билетов</h1>
    <TicketBooking />
  </div>
</template>

<script>
import TicketBooking from './TicketBooking';

export default {
  name: 'Home' ,
  components: { TicketBooking }
}
</script>
<style>
.content{
  padding:50px 0;
}
.content h1{
    color: #fff;
    font-size: 38px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
}
</style>