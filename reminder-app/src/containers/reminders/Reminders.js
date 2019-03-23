import React, { Component } from 'react';
import Input from '../../components/reminders/Input';
import RemindersTable from '../../components/reminders/Table';

import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";

const FETCH_ALL_REMINDERS = gql`
  query FetchAllReminders {
    allReminders {
      id
      title
      deadline
      completed
    }
  }
`;

const CREATE_REMINDER = gql`
  mutation CreateReminder ($title: String!, $deadline: String!) {
    createReminder (title: $title, deadline: $deadline) {
      id
      title
      deadline
      completed
    }
  }
`;

const REMOVE_REMINDER = gql`
  mutation RemoveReminder ($id: ID!) {
    removeReminder (id: $id) {
      id
    }
  }
`;

const UPDATE_REMINDER = gql`
  mutation UpdateReminder ($id: ID!, $completed: Boolean!) {
    updateReminder (id: $id, completed: $completed) {
      id
      completed
    }
  }
`;

class RemindersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      inputValue: ''
    }
  }

  createReminder = (mutation) => (title, deadline) => {
    mutation({
      variables: {
        title,
        deadline
      },
      update: (cache, {data: {createReminder}}) => {
        const { allReminders } = cache.readQuery({query: FETCH_ALL_REMINDERS})
        cache.writeQuery({
          query: FETCH_ALL_REMINDERS,
          data: {allReminders: allReminders.concat([createReminder])}
        })
      }
    });
  }

  updateReminder = (mutation) => (id, completed) => {
    mutation({
      variables: {
        id,
        completed
      },
      refetchQueries: [{query: FETCH_ALL_REMINDERS}]
    })
  }

  deleteReminder = (mutation) => (id) => {
    mutation({
      variables: {
        id
      },
      refetchQueries: [{query: FETCH_ALL_REMINDERS}]
    });
  }

  render() {
    return (
      <div>
        <Mutation mutation={CREATE_REMINDER}>
          { (mutation) => {

            return(
              <Input createReminder={this.createReminder(mutation)}/>
            )
          }}

        </Mutation>

        <Query query={FETCH_ALL_REMINDERS}>
          {({ loading, error, data }) => {

            if (loading) return <p>Loading...</p>;
            if (error) return <p>error</p>;

            return (
              <Mutation mutation={UPDATE_REMINDER}>
                { (updateMutation) => {
                  return (
                    <Mutation mutation={REMOVE_REMINDER}>
                      { (removeMutation) => {
                        return(
                          <RemindersTable
                            data={data}
                            updateReminder={this.updateReminder(updateMutation)}
                            deleteReminder={this.deleteReminder(removeMutation)}
                          />
                        )
                      }}
                    </Mutation>
                  )
                }
              }
              </Mutation>
            )
          }}
        </Query>

      </div>
    )
  }
}

export default RemindersContainer
