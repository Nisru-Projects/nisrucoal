exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {id: 1, discord_id: '422002630106152970', permissions: ['*']},
  ]);
};
